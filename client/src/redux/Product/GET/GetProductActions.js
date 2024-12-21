import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./GetProductTypes";
import axios from "axios";

// Action to indicate the start of the API request
const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

// Action when the API request is successful
const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: data,
  };
};

// Action when there is an error with the API request
const getProductError = (error) => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: error,
  };
};

// Action to fetch products
// Named export for getProducts action
export const getProducts = () => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios
      .get("http://localhost:5000/api/all/products", { withCredentials: true })
      .then((response) => {
        // Extract the 'data' property from the API response
        dispatch(getProductSuccess(response.data.data));
        console.log(response.data.data);  

      })
      .catch((error) => {
        dispatch(getProductError(error.message));
      });
  };
};
