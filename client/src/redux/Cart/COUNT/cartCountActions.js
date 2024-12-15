// cartCountActions.js
import {
    COUNT_CART_REQUEST,
    COUNT_CART_SUCCESS,
    COUNT_CART_ERROR,
  } from "./cartCountTypes";
  
  export const countCartItems = () => (dispatch, getState) => {
    dispatch({ type: COUNT_CART_REQUEST });
    try {
      const cartItems = getState().cart.cartItems; // Assuming `cartItems` is in the state
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      dispatch({ type: COUNT_CART_SUCCESS, payload: totalQuantity });
      localStorage.setItem("cartTotalQuantity", totalQuantity);
    } catch (error) {
      dispatch({ type: COUNT_CART_ERROR, payload: error.message });
    }
  };
  