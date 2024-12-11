import React from "react";
import Logo from "../../asset/Teraskopilogo.png";
import { useNavigate } from "react-router-dom";
const NavbarHomePages = () => {
  const navigate = useNavigate();
  const HandleLoginPages = () => {
    navigate("/pages/login");
  };
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-white text-2xl font-bold">
          <img src={Logo} alt="Teras Kopi Logo" className="h-20" />
        </div>
        <button
          onClick={HandleLoginPages}
          className="px-6 py-3 bg-green-50 text-green-600 font-bold rounded-lg shadow-lg hover:bg-green-500  hover:text-emerald-50 active:bg-emerald-50 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default NavbarHomePages;
