import { GET_CAFE_BRANCH_REQUEST,GET_CAFE_BRANCH_SUCCESS,GET_CAFE_BRANCH_ERROR } from "./CafeBranchTypes";

const initialState = {
    loading:false,
    data:[],
    error:""
}

const getCafeBranchReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_CAFE_BRANCH_REQUEST:
            return {...state,loading:true}
        case GET_CAFE_BRANCH_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case GET_CAFE_BRANCH_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default getCafeBranchReducer