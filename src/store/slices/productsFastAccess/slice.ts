import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchProductsData } from '../../utils/fetchProductsData';
import { MyAsyncThunkConfig, Status, getExtraReducers } from '../../utils/getExtraReducers';
import { FiltersForProducts } from '../../utils/getFilterForProducts';
import { Product } from '../cart/types';
import { ProductSliceState } from '../product/types';

export const fetchProductsFastAccess = createAsyncThunk<Product[], FiltersForProducts, MyAsyncThunkConfig>(
  'products/fetchProductsFastAccess',
  fetchProductsData,
);

const initialState: ProductSliceState = {
  error: null,
  isLoaded: false,
  list: [],
  status: Status.LOADING,
};

const productsFastAccessSlice = createSlice({
  extraReducers: (builder) => getExtraReducers(builder)(fetchProductsFastAccess),

  initialState,
  name: 'productsFastAccess',

  reducers: {
    setLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
  },
});

export const { setLoaded } = productsFastAccessSlice.actions;
export default productsFastAccessSlice.reducer;
