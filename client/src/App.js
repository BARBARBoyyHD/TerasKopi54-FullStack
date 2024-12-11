import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import Dashboard from "./pages/Dashboard";
import RegisterUserPages from "./pages/RegisterUserPages";
import Practice from "./pages/Practice";
import ProductListPages from "./pages/ProductListPages";
import MenuPages from "./pages/MenuPages";
import InventeroyPages from "./pages/InventeroyPages";
import CartPages from "./pages/CartPages";
import CafeBranchPages from "./pages/CafeBranchPages";
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
          </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;
