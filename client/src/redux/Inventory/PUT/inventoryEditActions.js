import axios from "axios";
import {
  PUT_INVENTORY_REQUEST,
  PUT_INVENTORY_SUCCESS,
  PUT_INVENTORY_ERROR,
} from "./inventoryEditTypes";

const putInventoryRequest = () => {
  return {
    type: PUT_INVENTORY_REQUEST,
  };
};

const putInventorySuccess = (data) => {
  return {
    type: PUT_INVENTORY_SUCCESS,
    payload: data,
  };
};

const putInventoryError = (error) => {
  return {
    type: PUT_INVENTORY_ERROR,
    payload: error,
  };
};

export const putInventory = (id, data) => {
    return (dispatch) => {
      dispatch(putInventoryRequest(id));
      return axios // Add "return" here to return the Promise
        .put(`http://localhost:5000/api/update/inventory/${id}`, data, {
          withCredentials: true,
        })
        .then((response) => {
          dispatch(putInventorySuccess(response.data.data));
        })
        .catch((error) => {
          dispatch(putInventoryError(error.message));
        });
    };
  };
  
