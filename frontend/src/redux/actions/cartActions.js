//this is where we do our query requests to the backend to get the product details and add it to the cart

import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState)  => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
//sets the cart items in local storage if they are added to the cart and removes them from local storage if they are removed from the cart
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}