import { PUT_PRODUCT_REQUEST, PUT_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR } from "./PutProductTypes";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const putProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case PUT_PRODUCT_REQUEST:
            return {...state,loading:true}
        case PUT_PRODUCT_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case PUT_PRODUCT_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default putProductReducer;