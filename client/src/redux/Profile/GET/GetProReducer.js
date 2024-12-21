import {GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS,GET_PROFILE_ERROR} from "./GetProTypes"

const initialState = {
    loading:false,
    data:null,
    error:null
}

const getProfileReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_PROFILE_REQUEST:
            return {...state,loading:true}
        case GET_PROFILE_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case GET_PROFILE_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default getProfileReducer