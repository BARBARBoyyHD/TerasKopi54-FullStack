import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./GetProductTypes";

const initialState = {
  loading: false,
  data: [], // This should remain an array
  error: "",
};

const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: action.payload }; // payload is now the array of products
    case GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProductsReducer;
