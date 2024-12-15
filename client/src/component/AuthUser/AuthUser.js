import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = ({ setAuthData }) => {
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        credentials: "include", // Ensure cookies are included
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Authenticated User Data:", data);
        setAuthData(data); // Pass data up to parent
      } else {
        console.log("Authentication Failed:", data);
        navigate("/"); // Redirect on failure
      }
    } catch (error) {
      console.error("Error Fetching Data:", error.message);
      navigate("/"); // Redirect on error
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return null; // No UI needed for this component
};

export default AuthUser;
