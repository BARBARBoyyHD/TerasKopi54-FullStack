import { GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR } from "./SingleTypes";

const initialState = {
    loading:false,
    data:{},
    error:""
}

const singleProductReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SINGLE_PRODUCT_REQUEST:
            return {...state,loading:true}
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case GET_SINGLE_PRODUCT_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default singleProductReducer