import { PUT_PROFILE_REQUEST,PUT_PROFILE_SUCCESS,PUT_PROFILE_ERROR } from "./ProfilePutTypes";

const initialState = {
    loading:false,
    data:null,
    false:null,
}

const profilePutReducer = (state=initialState,action)=>{
    switch(action.type){
        case PUT_PROFILE_REQUEST:
            return {...state,loading:true}
        case PUT_PROFILE_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case PUT_PROFILE_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default profilePutReducer