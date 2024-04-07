import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice";
import productDetailsReducer from '../features/product/productDetailsSlice';
import userReducer from '../features/user/userSlice';
import profileReducer from '../features/user/profileSlice';
import forgotPasswordReducer from '../features/user/forgotPasswordSlice';
import cartReducer from "../features/product/cartSlice"
import newOrderReducer from '../features/order/newOrderSlice';
import myOrdersReducer from "../features/order/myOrderSlice"
import orderDetailsReducer from '../features/order/orderDetailsSlice';
import newReviewReducer from '../features/product/newReviewSlice';

export const store = configureStore({
  reducer: {
    products:productReducer,
    productDetails: productDetailsReducer,
    user:userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart:cartReducer, 
    newOrder:newOrderReducer, 
    myOrders:myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
  },
});