import axios from "axios";
import { GET_SINGLE_INVENTORY_REQUEST, GET_SINGLE_INVENTORY_SUCCESS, GET_SINGLE_INVENTORY_ERROR } from "./SingleInventoryTypes";

const getSingleInventoryRequest = (id)=>{
    return{
        type:GET_SINGLE_INVENTORY_REQUEST,
        payload:id
    }
}

const getSingleInventorySuccess = (data)=>{
    return{
        type:GET_SINGLE_INVENTORY_SUCCESS,
        payload:data
    }
}

const getSingleInventoryError = (error)=>{
    return{
        type:GET_SINGLE_INVENTORY_ERROR,
        payload:error
    }
}

export const getSingleInventory = (id)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:5000/api/item/inventory/${id}`,{withCredentials:true})
        .then((response)=>{
            dispatch(getSingleInventorySuccess(response.data.data))
        })
        .catch((error)=>{
            dispatch(getSingleInventoryError(error.message))
        })
    }
}