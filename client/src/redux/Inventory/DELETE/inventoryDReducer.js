import { DELETE_INVENTORY_REQUEST, DELETE_INVENTORY_SUCCESS, DELETE_INVENTORY_ERROR } from "./inventoryDTypes";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const inventoryDeleteReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_INVENTORY_REQUEST:
            return {...state,loading:true}
        case DELETE_INVENTORY_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case DELETE_INVENTORY_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default inventoryDeleteReducer