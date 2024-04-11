import { createSlice } from '@reduxjs/toolkit';
import {
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
} from "../../constants/productConstants";

// Initial state
const initialState = {
    products: [],
    loading: false,
    error: null,
    productsCount: 0,
    resultPerPage:0,
    filteredProductsCount:0,
};

// Slice creation
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ALL_PRODUCT_REQUEST, (state) => {
                state.loading = true;
            })
            .addCase(ALL_PRODUCT_SUCCESS, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.productsCount = action.payload.productsCount;
                state.resultPerPage = action.payload.resultPerPage;
                state.filteredProductsCount = action.payload.filteredProductsCount;
            })
            .addCase(ALL_PRODUCT_FAIL, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(CLEAR_ERRORS, (state) => {
                state.error = null;
            })
            .addCase(ADMIN_PRODUCT_REQUEST, (state) => {
                state.loading = true;
            }).addCase(ADMIN_PRODUCT_FAIL, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(ADMIN_PRODUCT_SUCCESS, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            });
    },
});

// Export reducer and actions
export const { } = productSlice.actions; // No need to export actions in this case
export default productSlice.reducer;
