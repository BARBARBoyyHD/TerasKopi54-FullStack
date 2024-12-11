import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./LogoutTypes";

const intialState = {
    loading: false,
    error:"",
    data:[]
}

const LogoutUserReducer =(state = intialState,action)=>{
    switch(action.type){
        case LOGOUT_REQUEST:
            return {...state,loading:true}
        case LOGOUT_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case LOGOUT_FAILURE:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default LogoutUserReducer