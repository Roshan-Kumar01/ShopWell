import { createSlice } from '@reduxjs/toolkit';
import { ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, ALL_ORDERS_FAIL, CLEAR_ERRORS } from '../../constants/orderConstants'; 

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const allOrdersSlice = createSlice({
  name: 'allOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ALL_ORDERS_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(ALL_ORDERS_SUCCESS, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(ALL_ORDERS_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  },
});

export default allOrdersSlice.reducer;
