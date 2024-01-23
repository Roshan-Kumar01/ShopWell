import { createStore, combineReducers,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { productDetailsReducer, productsReducer } from './reducers/productsReducer';

const reducer = combineReducers({
    products:productsReducer,
    productDetails: productDetailsReducer
})
let initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store