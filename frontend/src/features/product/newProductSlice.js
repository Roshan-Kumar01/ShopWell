import { createSlice } from '@reduxjs/toolkit';
import {
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  CLEAR_ERRORS
} from '../../constants/productConstants';

const initialState = {
  loading: false,
  success: false,
  product: {},
  error: null
};

const newProductSlice = createSlice({
  name: 'newProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(NEW_PRODUCT_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(NEW_PRODUCT_SUCCESS, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.product = action.payload.product;
      })
      .addCase(NEW_PRODUCT_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(NEW_PRODUCT_RESET, (state) => {
        state.success = false;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  }
});

export default newProductSlice.reducer;
