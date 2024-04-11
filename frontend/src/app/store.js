import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/product/productsSlice";
import productDetailsReducer from '../features/product/productDetailsSlice';
import userReducer from '../features/user/userSlice';
import profileReducer from '../features/user/profileSlice';
import forgotPasswordReducer from '../features/user/forgotPasswordSlice';
import cartReducer from "../features/product/cartSlice"
import newOrderReducer from '../features/order/newOrderSlice';
import myOrdersReducer from "../features/order/myOrderSlice"
import orderDetailsReducer from '../features/order/orderDetailsSlice';
import newReviewReducer from '../features/product/newReviewSlice';
import allOrdersReducer from '../features/order/allOrdersSlice';
import allUsersReducer from '../features/user/allUsersSlice';
import productReducer from '../features/product/productSlice';
import newProductReducer from '../features/product/newProductSlice';

export const store = configureStore({
  reducer: {
    products:productsReducer,
    product:productReducer,
    productDetails: productDetailsReducer,
    user:userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart:cartReducer, 
    newOrder:newOrderReducer, 
    myOrders:myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    allUsers: allUsersReducer,
    allOrders: allOrdersReducer,
    newProduct: newProductReducer,
  },
});