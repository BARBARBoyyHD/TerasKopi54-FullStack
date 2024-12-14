import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CafeBranchPages from "./pages/CafeBranchPages";
import CartPages from "./pages/CartPages";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import InventeroyPages from "./pages/InventeroyPages";
import LoginPages from "./pages/LoginPages";
import MenuPages from "./pages/MenuPages";
import Practice from "./pages/Practice";
import ProductListPages from "./pages/ProductListPages";
import RegisterUserPages from "./pages/RegisterUserPages";
import UserProfilePages from "./pages/UserProfilePages";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/pages/login"element={<LoginPages/>}/>
            <Route path="/pages/Dashboard" element={<Dashboard/>}/>
            <Route path="/pages/Register/user" element={<RegisterUserPages/>}/>
            <Route path="/pages/Practice"element={<Practice/>}/>
            <Route path="/pages/Product/list"element={<ProductListPages/>}/>
            <Route path="/pages/Menu"element={<MenuPages/>}/>
            <Route path="/pages/Inventory"element={<InventeroyPages/>}/>
            <Route path="/pages/Cart"element={<CartPages/>}/>
            <Route path="/pages/Cafe/Branch"element={<CafeBranchPages/>}/>
            <Route path="/pages/user/profile" element={<UserProfilePages/>}/>
          </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;
