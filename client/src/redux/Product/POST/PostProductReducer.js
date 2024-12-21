import { POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, POST_PRODUCT_ERROR } from "./PostProductTypes";

const initialState = {
    loading:false,
    data: null,
    error:null
}

const postProductReducer = (state = initialState, action) =>{
    switch(action.type){
        case POST_PRODUCT_REQUEST:
            return {...state,loading:true}
        case POST_PRODUCT_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case POST_PRODUCT_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default postProductReducer