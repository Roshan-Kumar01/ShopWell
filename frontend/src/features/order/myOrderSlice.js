import { createSlice } from '@reduxjs/toolkit';
import {
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  CLEAR_ERRORS,
} from '../../constants/orderConstants';

const initialState = {
  loading: false,
  orders: [],
  error: null,
};

const myOrdersSlice = createSlice({
  name: 'myOrders',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(MY_ORDERS_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(MY_ORDERS_SUCCESS, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(MY_ORDERS_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default myOrdersSlice.reducer;
