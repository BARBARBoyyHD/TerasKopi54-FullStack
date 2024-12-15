import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertLogin from "../Alert/AlertLogin";
import ButtonToRegister from "../Button/ButtonToRegister";

const LoginForm = () => {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        "http://localhost:5000/api/login/users",
        inputForm, // Pass the state object directly
        { withCredentials: true } // Configuration for cookies
      )
      .then((response) => {
        if(response.status !== 200){
          navigate("/pages/login");
          return
        }
        navigate("/pages/Dashboard"); // Redirect to Dashboard on success
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError("Incorrect username or password. Please try again.");
        setLoading(false);
      });
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
      {/* {"alert componenet"} */}
      <div>
        <AlertLogin message={error} onClose={() => setError("")} />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-left text-gray-600 font-semibold mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={inputForm.username}
              onChange={(e) =>
                setInputForm({ ...inputForm, username: e.target.value })
              }
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-left text-gray-600 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={inputForm.password}
              onChange={(e) =>
                setInputForm({ ...inputForm, password: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-200 flex justify-center items-center"
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
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Register Options */}
        <h2 className="text-xl font-bold text-green-900 mb-4">Register</h2>
        <div className="flex flex-col space-y-2">
              <ButtonToRegister/>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
