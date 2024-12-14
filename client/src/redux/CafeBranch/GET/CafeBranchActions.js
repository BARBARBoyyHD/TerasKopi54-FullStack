import { GET_CAFE_BRANCH_REQUEST,GET_CAFE_BRANCH_SUCCESS,GET_CAFE_BRANCH_ERROR } from "./CafeBranchTypes";
import axios from "axios";

const getCafeBranchRequest = ()=>{
    return{
        type:GET_CAFE_BRANCH_REQUEST
    }
}

const getCafeBranchSuccess = (data)=>{
    return{
        type:GET_CAFE_BRANCH_SUCCESS,
        payload:data
    }
} 

const getCafeBranchError = (error)=>{
    return{
        type:GET_CAFE_BRANCH_ERROR,
        payload:error
    }
}

export const getCafeBranch = () => {
    return (dispatch) => {
        dispatch(getCafeBranchRequest());
        axios
            .get("http://localhost:5000/api/cafe-branch", { withCredentials: true })
            .then((response) => {
                dispatch(getCafeBranchSuccess(response.data.data));
                console.log(response.data.data);
            })
            .catch((error) => {
                dispatch(getCafeBranchError(error.message));
            });
    };
};
