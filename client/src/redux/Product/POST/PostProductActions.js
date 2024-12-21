import { POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, POST_PRODUCT_ERROR } from "./PostProductTypes";
import axios from "axios";

const postProductRequest = ()=>{
    return{
        type:POST_PRODUCT_REQUEST
    }
}

const postProductSuccess = (data)=>{
    return{
        type:POST_PRODUCT_SUCCESS,
        payload :data
    }
}

const postProductError = (error)=>{
    return{
        type:POST_PRODUCT_ERROR,
        payload :error
    }
}

export const postProduct = (data)=>{
    return(dispatch)=>{
        dispatch(postProductRequest());
        axios.post("http://localhost:5000/api/add/product",data,{withCredentials:true})
        .then((response)=>{
            dispatch(postProductSuccess(response.data));
            console.log(response.data);
        })
        .catch((error) => {
            const errorMessage = error.response?.data?.message || error.message;
            dispatch(postProductError(errorMessage));
        });
        
    }
}