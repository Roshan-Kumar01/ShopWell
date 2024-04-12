import { createSlice } from '@reduxjs/toolkit';
import {
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  CLEAR_ERRORS,
} from '../../constants/productConstants';

const initialState = {
  loading: false,
  error: null,
  isDeleted: false,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DELETE_REVIEW_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DELETE_REVIEW_SUCCESS, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(DELETE_REVIEW_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DELETE_REVIEW_RESET, (state) => {
        state.isDeleted = false;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default reviewSlice.reducer;
