import { GET_INVENTORY_REQUEST,GET_INVENTORY_SUCCESS,GET_INVENTORY_ERROR } from "./InventoryTypes";
import axios from "axios";

const getInventoryRequest = ()=>{
    return{
        type:GET_INVENTORY_REQUEST
    }
}

const getInventorySuccess = (data)=>{
    return{
        type:GET_INVENTORY_SUCCESS,
        payload:data
    }
}

const getInventoryError = (error)=>{
    return{
        type:GET_INVENTORY_ERROR,
        payload:error
    }
}

export const getInventory = () => {
    return (dispatch) => {
      dispatch(getInventoryRequest());
      axios
        .get("http://localhost:5000/api/all/item/inventory", { withCredentials: true })
        .then((response) => {
          // Extract the 'data' property from the API response
          dispatch(getInventorySuccess(response.data.data));
          console.log(response.data.data);
        })
        .catch((error) => {
          dispatch(getInventoryError(error.message));
        });
    }
}