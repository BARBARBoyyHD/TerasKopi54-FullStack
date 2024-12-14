import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./RegisterTypes";
import axios from "axios";
const registerRequest = () => {
    return {
        type: REGISTER_REQUEST,
    }
}

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    }
}

const registerFailure = () => {
    return {
        type: REGISTER_FAILURE,
    }
}

export const RegisterUser = (userdata,navigate)=>{
    return(dispatch)=>{
        dispatch(registerRequest());
        axios.post("http://localhost:5000/api/register/users",userdata,{withCredentials:true}).then((response)=>{
            dispatch(registerSuccess());
            navigate("/pages/login")
        })
        .catch((error)=>{
            dispatch(registerFailure());
        })
    }
}