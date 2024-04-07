import { createSlice } from "@reduxjs/toolkit";
import { 
    ORDER_DETAILS_REQUEST, 
    ORDER_DETAILS_SUCCESS, 
    ORDER_DETAILS_FAIL, 
    CLEAR_ERRORS
 } from '../../constants/orderConstants';

const initialState = {
  order: {},
  loading: false,
  error: null
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ORDER_DETAILS_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(ORDER_DETAILS_SUCCESS, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.error = null;
      })
      .addCase(ORDER_DETAILS_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  }
});

export const {} = orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
