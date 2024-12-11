import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./LogoutTypes";
import axios from "axios";

const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST,
    };
};
const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};
const logoutFailure = (error) => {
    return {
        type: LOGOUT_FAILURE,
        payload: error,
    };
};

export const LogoutUser = (navigate)=>{
    return(dipatch)=>{
        dipatch(logoutRequest());
        axios.get("http://localhost:5000/api/user/logout",{withCredentials:true}).then((response)=>{
            dipatch(logoutSuccess());
            navigate("/")
        }).catch((error)=>{
            dipatch(logoutFailure(error.message));
        })
    }
}