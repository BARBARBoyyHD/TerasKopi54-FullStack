import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonLogin = () => {
  const navigate = useNavigate();
  const HandleLoginPages = () => {
    navigate("/pages/login");
  };
  return (
    <div className="mt-2">
      <button
        onClick={HandleLoginPages}
        className="px-6 py-3 bg-green-50 text-green-600 font-bold rounded-lg shadow-lg hover:bg-green-500  hover:text-emerald-50 active:bg-emerald-50 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
      >
        Get Started
      </button>
    </div>
  );
};

export default ButtonLogin;
