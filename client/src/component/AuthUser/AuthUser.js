import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = ({ setAuthData }) => {
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        credentials: "include", // Ensure cookies are included
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Authenticated User Data:", data);
        setAuthData(data); // Update parent state with authenticated user data
      } else {
        console.error("Authentication Failed:", data.message || data);
        navigate("/"); // Redirect to login page on failure
      }
    } catch (error) {
      console.error("Error Fetching Data:", error.message);
      navigate("/"); // Redirect on error
    }
  };

  useEffect(() => {
    handleAuth();
  }, [setAuthData]);

  return <p>Loading...</p>; // Optional: Add a loading indicator
};

export default AuthUser;
