import { GET_INVENTORY_REQUEST,GET_INVENTORY_SUCCESS,GET_INVENTORY_ERROR } from "./InventoryTypes";

const initialState = {
    loading:false,
    data:[],
    error:""
}


const InventoryReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_INVENTORY_REQUEST:
            return {...state,loading:true}
        case GET_INVENTORY_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case GET_INVENTORY_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default InventoryReducer