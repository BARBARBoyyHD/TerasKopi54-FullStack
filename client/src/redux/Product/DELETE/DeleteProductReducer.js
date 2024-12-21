import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_ERROR } from "./DeleteProductTypes";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const deleteProductReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
            return {...state,loading:true}
        case DELETE_PRODUCT_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case DELETE_PRODUCT_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default deleteProductReducer