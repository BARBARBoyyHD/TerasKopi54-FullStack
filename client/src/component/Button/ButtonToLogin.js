import React, { useState } from "react"; // Correctly import useState from React
import { useNavigate } from "react-router-dom"; // Correctly import useNavigate

const ButtonToLogin = () => {
  const [loading, setLoading] = useState(false); // State for button loading
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    // Simulate navigation delay to show spinner (optional)
    navigate("/pages/login");
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className={`w-full bg-stone-800 text-white font-bold py-2 rounded-md flex justify-center items-center transition-all duration-200 ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 focus:ring-4 focus:ring-green-300"
        }`}
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
          "Go to Login Page" // Corrected label for the button
        )}
      </button>
    </div>
  );
};

export default ButtonToLogin;
