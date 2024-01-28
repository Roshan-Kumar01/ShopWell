import { createStore, combineReducers,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { productDetailsReducer, productsReducer } from './reducers/productsReducer';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    products:productsReducer,
    productDetails: productDetailsReducer,
    user:userReducer
})
let initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store