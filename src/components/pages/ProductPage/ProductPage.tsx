import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../../store';
import {
  Product,
  ProductInfoQuantity,
  addProduct,
  deleteOneProduct,
  setProductCount,
} from '../../../store/reducers/cart';
import { fetchProduct, isLoadedSelector, productSelector } from '../../../store/reducers/product';
import { RestaurantPage } from '../RestaurantPage/RestaurantPage';
import { Card } from './Card';
import { LoaderLeft } from './LoaderLeft';
import { LoaderRight } from './LoaderRight';
import style from './productPage.module.scss';

const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const isLoaded = useSelector(isLoadedSelector);
  const product = useSelector(productSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(
      fetchProduct({
        id,
        limit: 1,
      }),
    );
  }, [id, dispatch]);

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (product: Product) => {
    dispatch(deleteOneProduct(product));
  };

  const handleInputCount = (obj: ProductInfoQuantity) => {
    dispatch(setProductCount(obj));
  };

  const skeleton = new Array(1).fill(0).map((_, index) => (
    <div className={style.placeholder} key={index}>
      <LoaderLeft />
      <LoaderRight />
    </div>
  ));

  return (
    <>
      <div className={style.productPage}>
        <div className="container">
          <h1 className={style.title}>Restaurant menu</h1>
          <div className={style.product}>
            {isLoaded && product
              ? product.map((item, i) => (
                  <Card
                    {...item}
                    handleAddProduct={handleAddProduct}
                    handleInputCount={handleInputCount}
                    handleRemoveProduct={handleRemoveProduct}
                    key={`${item.id}${i}`}
                  />
                ))
              : skeleton}
          </div>
        </div>
      </div>
      <RestaurantPage />
    </>
  );
};

export default ProductPage;
