import { createSlice } from '@reduxjs/toolkit';
import {
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  UPDATE_PRODUCT_RESET,
  CLEAR_ERRORS
} from '../../constants/productConstants';

const initialState = {
  loading: false,
  isDeleted: false,
  isUpdated: false,
  error: null
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DELETE_PRODUCT_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(UPDATE_PRODUCT_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DELETE_PRODUCT_SUCCESS, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(UPDATE_PRODUCT_SUCCESS, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(DELETE_PRODUCT_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(UPDATE_PRODUCT_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DELETE_PRODUCT_RESET, (state) => {
        state.isDeleted = false;
      })
      .addCase(UPDATE_PRODUCT_RESET, (state) => {
        state.isUpdated = false;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  }
});

export default productSlice.reducer;
