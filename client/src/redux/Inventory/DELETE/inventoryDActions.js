import axios from "axios";
import { DELETE_INVENTORY_REQUEST, DELETE_INVENTORY_SUCCESS, DELETE_INVENTORY_ERROR } from "./inventoryDTypes";

const deleteInventoryRequest = (id)=>{
    return{
        type:DELETE_INVENTORY_REQUEST,
        payload:id
    }
}
const deleteInventorySuccess = (data)=>{
    return{
        type:DELETE_INVENTORY_SUCCESS,
        payload:data
    }
}
const deleteInventoryError = (error)=>{
    return{
        type:DELETE_INVENTORY_ERROR,
        payload:error
    }
}

export const deleteInventory = (id)=>{
    return(dispatch)=>{
        dispatch(deleteInventoryRequest(id))
        axios
        .delete(`http://localhost:5000/api/delete/inventory/${id}`, {withCredentials:true})
        .then((response)=>{
            dispatch(deleteInventorySuccess(response.data.data))
        })
        .catch((error)=>{
            dispatch(deleteInventoryError(error.message))
        })
    }
}