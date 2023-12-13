import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Restaurant } from '../../../utils/utilsForStore/getExtraReducers';
import { CardFeatured } from './CardFeatured';
import { Loader } from './Loader';
import style from './restaurantList.module.scss';

type RestaurantListProps = {
  isLoading: boolean;
  list: Restaurant[];
};

export const RestaurantList: FC<RestaurantListProps> = ({ isLoading, list }) => {
  const skeleton = new Array(4).fill(0).map((_, index) => <Loader key={index} />);

  return (
    <div className={style.restaurantListWrapper}>
      {isLoading && list
        ? list.map((obj) => (
            <Link key={obj.id} to={`restaurant/${obj.id}/product/${obj.backgroundId}`}>
              <CardFeatured {...obj} />
            </Link>
          ))
        : skeleton}
    </div>
  );
};
