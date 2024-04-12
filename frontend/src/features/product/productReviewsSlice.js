import { createSlice } from '@reduxjs/toolkit';
import {
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  CLEAR_ERRORS,
} from '../../constants/productConstants';

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const productReviewsSlice = createSlice({
  name: 'productReviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ALL_REVIEW_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(ALL_REVIEW_SUCCESS, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(ALL_REVIEW_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default productReviewsSlice.reducer;
