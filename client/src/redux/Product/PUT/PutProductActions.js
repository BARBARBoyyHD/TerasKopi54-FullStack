import axios from "axios";
import {
  PUT_PRODUCT_REQUEST,
  PUT_PRODUCT_SUCCESS,
  PUT_PRODUCT_ERROR,
} from "./PutProductTypes";

const putProductRequest = (id) => {
  return {
    type: PUT_PRODUCT_REQUEST,
    payload: id,
  };
};

const putProductSuccess = (data) => {
  return {
    type: PUT_PRODUCT_SUCCESS,
    payload: data,
  };
};

const putProductError = (error) => {
  return {
    type: PUT_PRODUCT_ERROR,
    payload: error,
  };
};

export const putProduct = (id, formData) => {
  return (dispatch) => {
    dispatch(putProductRequest(id));
    axios
      .put(`http://localhost:5000/api/update/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
        withCredentials: true, // Include cookies for authentication
      })
      .then((response) => {
        dispatch(putProductSuccess(response.data.data));
        console.log(response);
      })
      .catch((error) => {
        dispatch(putProductError(error.message));
      });
  };
};
