import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_ERROR } from "./DeleteProductTypes";
import axios from "axios";

const deleteProductRequest = (id) => {
    return{
        type:DELETE_PRODUCT_REQUEST
    }
}

const deleteProductSuccess = (data) => {
    return{
        type:DELETE_PRODUCT_SUCCESS,
        payload :data
    }
}
const deleteProductError = (error) => {
    return{
        type:DELETE_PRODUCT_ERROR,
        payload :error
    }
}

export const deleteProduct = (id)=>{
    return(dispatch)=>{
        dispatch(deleteProductRequest(id))
        axios.delete(`http://localhost:5000/api/delete/product/${id}`,{withCredentials:true})
        .then((response)=>{
            dispatch(deleteProductSuccess(response.data.data))
            console.log(response.data.data);
        })
        .catch((error)=>{
            dispatch(deleteProductError(error.message))
        })
    }
}
