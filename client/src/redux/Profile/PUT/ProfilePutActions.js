import { PUT_PROFILE_REQUEST,PUT_PROFILE_SUCCESS,PUT_PROFILE_ERROR } from "./ProfilePutTypes";
import axios from "axios";

const putProfileRequest = ()=>{
    return{
        type:PUT_PROFILE_REQUEST
    }
}

const putProfileSuccess = (data)=>{
    return{
        type:PUT_PROFILE_SUCCESS,
        payload:data
    }
}

const putProfileError = (error)=>{
    return{
        type:PUT_PROFILE_ERROR,
        payload:error
    }
}

export const putProfile = (data) =>{
    return(dispatch)=>{
        dispatch(putProfileRequest())
        axios.put("http://localhost:5000/api/user/profile/update",data,{withCredentials:true})
        .then((response)=>{
            dispatch(putProfileSuccess(response.data))
        })
        .catch((error)=>{
            dispatch(putProfileError(error.message))
        })
    }
}