import { createSlice } from '@reduxjs/toolkit';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  CLEAR_ERRORS,
} from "../../constants/userConstants";

// Initial state
const initialState = {
  loading: false,
  error: null,
  message: null,
  success: null,
};

// Create slice
const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FORGOT_PASSWORD_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FORGOT_PASSWORD_SUCCESS, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(FORGOT_PASSWORD_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(RESET_PASSWORD_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RESET_PASSWORD_SUCCESS, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(RESET_PASSWORD_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

// Export reducer
export default forgotPasswordSlice.reducer;
