import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice";
import productDetailsReducer from '../features/product/productDetailsSlice';
import userReducer from '../features/user/userSlice';
import profileReducer from '../features/user/profileSlice';
import forgotPasswordReducer from '../features/user/forgotPasswordSlice';

export const store = configureStore({
  reducer: {
    products:productReducer,
    productDetails: productDetailsReducer,
    user:userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
  },
});