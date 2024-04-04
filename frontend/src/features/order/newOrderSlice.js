import { createSlice } from '@reduxjs/toolkit';
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
} from '../../constants/orderConstants';

const initialState = {
  loading: false,
  order: null,
  error: null,
};

const newOrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CREATE_ORDER_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(CREATE_ORDER_SUCCESS, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(CREATE_ORDER_FAIL, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
        state.error = null;
      });
  }
});

// Export actions
export const { } = newOrderSlice.actions;

export default newOrderSlice.reducer; 
