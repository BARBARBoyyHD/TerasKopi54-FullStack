import React, { useState } from "react";
import ButtonToLogin from "../Button/ButtonToLogin";
import AlertLogin from "../Alert/AlertLogin"; // Ensure you have an AlertLogin component

const RegisterForm = () => {
  const [loading, setLoading] = useState(false); // State for button loading
  const [error, setError] = useState(""); // State for handling errors

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission logic
    setTimeout(() => {
      setLoading(false);

      // For demo purposes: set an error or navigate upon success
      const success = Math.random() > 0.5; // Simulate success/failure
      if (!success) {
        setError("Login failed. Please try again.");
      }
    }, 2000);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
      {/* Alert Component */}
      {error && <AlertLogin message={error} onClose={() => setError("")} />}

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-green-600 text-white font-bold py-2 rounded-md transition-all duration-200 flex justify-center items-center ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-green-700 focus:ring-4 focus:ring-green-300"
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
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Register Options */}
        <h2 className="text-xl font-bold text-green-900 mb-4">Register</h2>
        <div className="flex flex-col space-y-2">
          <ButtonToLogin />
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
