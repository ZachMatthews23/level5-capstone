import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { cartReducer } from './reducers/cartReducers'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    //manages state in cart 
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer, 
})

const middleware = [thunk];
//thunk a way to get dev tools 


//maintains current cart in laocal storage on refresh
const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer, 
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store