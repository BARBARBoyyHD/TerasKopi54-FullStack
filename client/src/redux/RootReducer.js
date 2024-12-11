import {combineReducers} from "redux";
import LogoutUserReducer from "./Logout/LogoutReducer";
const rootReducer = combineReducers({
    LogoutUser : LogoutUserReducer
})

export default rootReducer