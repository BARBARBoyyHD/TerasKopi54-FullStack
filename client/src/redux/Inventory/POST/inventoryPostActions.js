import {
  POST_INVENTORY_REQUEST,
  POST_INVENTORY_SUCCESS,
  POST_INVENTORY_ERROR,
} from "./inventoryPostTypes";
import axios from "axios";

// Action creators
const postInventoryRequest = () => {
  return {
    type: POST_INVENTORY_REQUEST,
  };
};

const postInventorySuccess = (data) => {
  return {
    type: POST_INVENTORY_SUCCESS,
    payload: data,
  };
};

const postInventoryError = (error) => {
  return {
    type: POST_INVENTORY_ERROR,
    payload: error,
  };
};

// Thunk action for posting inventory
export const postInventory = (data) => {
  return (dispatch) => {
    dispatch(postInventoryRequest()); // Invoke the action creator

    axios
      .post("http://localhost:5000/api/add/item/inventory", data, {
        withCredentials: true, // If cookies are required
        headers: {
          "Content-Type": "application/json", // Specify JSON content
        },
      })
      .then((response) => {
        const inventoryData = response.data.data;
        dispatch(postInventorySuccess(inventoryData));
      })
      .catch((error) => {
        console.error("Error adding inventory:", error);
        dispatch(postInventoryError(error.message || "Something went wrong"));
      });
  };
};
