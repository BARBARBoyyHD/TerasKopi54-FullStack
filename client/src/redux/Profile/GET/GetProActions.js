import {GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS,GET_PROFILE_ERROR} from "./GetProTypes"
import axios from "axios";

const getProfileRequest = ()=>{
    return{
        type:GET_PROFILE_REQUEST
    }
}

const getProfileSuccess = (data)=>{
    return{
        type:GET_PROFILE_SUCCESS,
        payload:data
    }
}

const getProfileError = (error)=>{
    return{
        type:GET_PROFILE_ERROR,
        payload:error
    }
}

export const getUserProfile = ()=>{
    return(dispatch)=>{
        dispatch(getProfileRequest())
        axios.get("http://localhost:5000/api/user/profile",{withCredentials:true})
        .then((response)=>{
            dispatch(getProfileSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(getProfileError(error.message))
        })
    }
}