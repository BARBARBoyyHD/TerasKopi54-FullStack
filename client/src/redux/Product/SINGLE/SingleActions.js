import { GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR } from "./SingleTypes";
import axios from "axios";

const getSingleProductRequest = (id)=>{
    return{
        type:GET_SINGLE_PRODUCT_REQUEST
    }
}

const getSingleProductSuccess = (data)=>{
    return{
        type:GET_SINGLE_PRODUCT_SUCCESS,
        payload:data
    }
}

const getSingleProductError =(error)=>{
    return{
        type:GET_SINGLE_PRODUCT_ERROR,
        payload:error
    }
}

export const getSingleProduct = (id)=>{
    return(dispatch)=>{
        dispatch(getSingleProductRequest(id))
        axios.get(`http://localhost:5000/api/products/${id}`,{withCredentials:true})
        .then((response)=>{
            dispatch(getSingleProductSuccess(response.data.data))
            console.log(response.data.data);
        })
        .catch((error)=>{
            dispatch(getSingleProductError(error.message))
        })
    }
}