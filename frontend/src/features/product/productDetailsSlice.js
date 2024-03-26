import { createSlice } from '@reduxjs/toolkit';
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../../constants/productConstants";

// Initial state
const initialState = {
  product: {},
  loading: false,
  error: null,
};

// Slice creation
const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PRODUCT_DETAILS_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(PRODUCT_DETAILS_SUCCESS, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(PRODUCT_DETAILS_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

// Export reducer and actions
export const { } = productDetailsSlice.actions; // No need to export actions in this case
export default productDetailsSlice.reducer;
