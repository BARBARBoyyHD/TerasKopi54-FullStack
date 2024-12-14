import { ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_ERROR } from "./CartTypes";
import axios from "axios";

const addToCartRequest = ()=>{
    return{
        type:ADD_TO_CART_REQUEST
    }
}

const addToCartSuccess = (data)=>{
    return{
        type:ADD_TO_CART_SUCCESS,
        payload:data
    }
}

const addToCartError = (error)=>{
    return{
        type:ADD_TO_CART_ERROR,
        payload:error
    }
}

export const addToCart = (product_id)=>{
    return(dispatch)=>{
        dispatch(addToCartRequest());
        axios.post("http://localhost:5000/api/add/to/cart",product_id,{withCredentials:true}).then((response)=>{
            dispatch(addToCartSuccess(response.data.data));
        }).catch((error)=>{
            dispatch(addToCartError(error.message));
        })
    }
}