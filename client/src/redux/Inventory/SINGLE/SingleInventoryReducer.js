import { GET_SINGLE_INVENTORY_REQUEST, GET_SINGLE_INVENTORY_SUCCESS, GET_SINGLE_INVENTORY_ERROR } from "./SingleInventoryTypes";

const initialState = {
    loading:false,
    data:{},
    error:""
}

const singleInventoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_SINGLE_INVENTORY_REQUEST:
            return {...state,loading:true};
        case GET_SINGLE_INVENTORY_SUCCESS:
            return {...state,loading:false,data:action.payload};
        case GET_SINGLE_INVENTORY_ERROR:
            return {...state,loading:false,error:action.payload};
        default:
            return state;
    }
}

export default singleInventoryReducer