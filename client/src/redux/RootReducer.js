import {combineReducers} from "redux";
import LogoutUserReducer from "./Logout/LogoutReducer";
import getProductsReducer from "./Product/GET/GetProductReducer"
import registerReducer from "./Register/RegisterReducer"
import addToCartReducer from "./Cart/POST/CartReducer"
import InventoryReducer from "./Inventory/GET/InventoryReducer"
import getCafeBranchReducer from "./CafeBranch/GET/CafeBranchReducer";

const rootReducer = combineReducers({
    LogoutUser : LogoutUserReducer,
    getProducts : getProductsReducer,
    register : registerReducer,
    addToCart : addToCartReducer,
    getInventory : InventoryReducer,
    getCafeBranch : getCafeBranchReducer
})

export default rootReducer