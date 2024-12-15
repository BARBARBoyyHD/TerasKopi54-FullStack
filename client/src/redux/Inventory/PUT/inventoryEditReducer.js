import {
    PUT_INVENTORY_REQUEST,
    PUT_INVENTORY_SUCCESS,
    PUT_INVENTORY_ERROR,
  } from "./inventoryEditTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const inventoryPutReducer = (state = initialState, action) => {
    switch(action.type){
        case PUT_INVENTORY_REQUEST:
            return {...state,loading:true}
        case PUT_INVENTORY_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case PUT_INVENTORY_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default inventoryPutReducer