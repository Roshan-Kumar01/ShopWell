import { createSlice } from '@reduxjs/toolkit';
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../../constants/userConstants';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(USER_DETAILS_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(USER_DETAILS_SUCCESS, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(USER_DETAILS_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default userDetailsSlice.reducer;
