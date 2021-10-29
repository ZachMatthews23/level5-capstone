import * as actionTypes from '../constants/cartConstants'  //gives reducers access to the constants with action type


//sets the initial state
export const cartReducer = (state = {cartItems: []}, action) => {
switch(action.type){
    case actionTypes.ADD_TO_CART:       //adding existing item to the cart 
        const item = action.payload

        const existItem = state.cartItems.find((x) => x.product === item.product)

        if (existItem) {
            return {
                ...state,
                cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x) //looks for if an item already exists in the carrItems array and returns either the new item or an exisiting item (x)
            }
        }else {
            return {
                ...state,
                cartItems: [...state.cartItems, item]   //if an item is not found in the array this will push it into the cartItems array
            }
        }
    case actionTypes.REMOVE_FROM_CART:  //removing item from the cart
        return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.product !== action.payload)  //x.product = checking for products by their id
        }



    default: return state
}
}