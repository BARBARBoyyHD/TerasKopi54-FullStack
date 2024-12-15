import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
} from "./cartTypes";

// Add to cart action
// actions/cartActions.js


export const incrementQuantity = (productId) => {
    return {
      type: "INCREMENT_QUANTITY",
      payload: productId,
    };
  };
  
  export const decrementQuantity = (productId) => {
    return {
      type: "DECREMENT_QUANTITY",
      payload: productId,
    };
  };
  
  export const removeItem = (productId) => {
    return {
      type: "REMOVE_ITEM",
      payload: productId,
    };
  };
  
export const addToCart = (product) => (dispatch, getState) => {
  const { cartItems } = getState().addToCart; // Accessing the cart state

  // Check if the product is already in the cart
  const existingProduct = cartItems.find(
    (item) => item.product_id === product.product_id
  );

  if (existingProduct) {
    // If product exists, update its quantity
    const updatedCart = cartItems.map((item) =>
      item.product_id === product.product_id
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
    // Dispatch updated cart
    dispatch({
      type: "ADD_TO_CART",
      payload: updatedCart,
    });
  } else {
    // If product doesn't exist, add it to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: [...cartItems, product],
    });
  }

  // Update localStorage with the latest cart state
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().addToCart.cartItems)
  );
};
