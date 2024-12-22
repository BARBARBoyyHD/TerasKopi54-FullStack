import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonToRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setLoading(true);
    navigate("/pages/Register/user")
  };

  return (
    <div>
      <button
        type="button" // Changed to button to handle click logic
        onClick={handleClick}
        className="w-full bg-stone-800 text-white font-bold py-2 rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-200 flex justify-center items-center"
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          "Register" // Updated label to match "ButtonToRegister"
        )}
      </button>
    </div>
  );
};

export default ButtonToRegister;
