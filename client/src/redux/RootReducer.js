import { combineReducers } from "redux";
import getCafeBranchReducer from "./CafeBranch/GET/CafeBranchReducer";
import cartReducer from "./Cart/ADDTOCART/cartReducer";
import InventoryReducer from "./Inventory/GET/InventoryReducer";
import LogoutUserReducer from "./Logout/LogoutReducer";
import getProductsReducer from "./Product/GET/GetProductReducer";
import registerReducer from "./Register/RegisterReducer";
import cartCountReducer from "./Cart/COUNT/cartCountReducer";
import inventoryPostReducer from "./Inventory/POST/inventoryPostReducer";
import inventoryDeleteReducer from "./Inventory/DELETE/inventoryDReducer";
import inventoryPutReducer from "./Inventory/PUT/inventoryEditReducer";
import singleInventoryReducer from "./Inventory/SINGLE/SingleInventoryReducer";

const rootReducer = combineReducers({
  LogoutUser: LogoutUserReducer,
  getProducts: getProductsReducer,
  register: registerReducer,
  getInventory: InventoryReducer,
  getCafeBranch: getCafeBranchReducer,
  addToCart: cartReducer,
  countCartItems: cartCountReducer,
  postInventory: inventoryPostReducer,
  deleteInventory: inventoryDeleteReducer,
  putInventory: inventoryPutReducer,
  getSingleInventory:singleInventoryReducer
});

export default rootReducer;
