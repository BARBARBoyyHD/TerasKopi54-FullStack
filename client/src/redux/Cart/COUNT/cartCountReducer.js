import { COUNT_CART_REQUEST, COUNT_CART_SUCCESS, COUNT_CART_ERROR } from "./cartCountTypes";

const initialState = {
  loading: false,
  totalQuantity: JSON.parse(localStorage.getItem("cartItems"))?.reduce(
    (total, item) => total + item.quantity,
    0
  ) || 0,
  error: null,
};

const cartCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_CART_REQUEST:
      return { ...state, loading: true };
    case COUNT_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        totalQuantity: action.payload.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    case COUNT_CART_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cartCountReducer;
