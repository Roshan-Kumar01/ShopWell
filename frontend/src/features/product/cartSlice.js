import { createSlice } from '@reduxjs/toolkit';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from '../../constants/cartConstants';

// Define initial state
const initialState = {
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [],
  shippingInfo: {},
};

// Create cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_TO_CART, (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find((i) => i.product === item.product);

        if (isItemExist) {
          state.cartItems = state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          );
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase(REMOVE_CART_ITEM, (state, action) => {
        state.cartItems = state.cartItems.filter((i) => i.product !== action.payload);
      })
      .addCase(SAVE_SHIPPING_INFO, (state, action) => {
        state.shippingInfo = action.payload;
      });
  },
});

// Export actions
export const { } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
