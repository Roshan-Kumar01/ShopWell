import { createSlice } from "@reduxjs/toolkit";
import { NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAIL, NEW_REVIEW_RESET, CLEAR_ERRORS } from '../../constants/productConstants';

const initialState = {
  loading: false,
  success: false,
  error: null
};

const newReviewSlice = createSlice({
  name: "newReview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(NEW_REVIEW_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(NEW_REVIEW_SUCCESS, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(NEW_REVIEW_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(NEW_REVIEW_RESET, (state) => {
        state.success = false;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  }
});

export default newReviewSlice.reducer;
