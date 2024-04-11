import { createSlice } from '@reduxjs/toolkit';
import {
  UPDATE_ORDER_REQUEST,
  DELETE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_RESET,
  DELETE_ORDER_RESET,
  CLEAR_ERRORS,
} from '../../constants/orderConstants';

const initialState = {
  loading: false,
  error: null,
  isUpdated: false,
  isDeleted: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UPDATE_ORDER_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DELETE_ORDER_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(UPDATE_ORDER_SUCCESS, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(DELETE_ORDER_SUCCESS, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(UPDATE_ORDER_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DELETE_ORDER_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(UPDATE_ORDER_RESET, (state) => {
        state.isUpdated = false;
      })
      .addCase(DELETE_ORDER_RESET, (state) => {
        state.isDeleted = false;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default orderSlice.reducer;
