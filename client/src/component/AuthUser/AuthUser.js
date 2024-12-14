import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        credentials: "include", // Ensure cookies are included
      });

      if (!res.ok) {
        // Navigate to the home page if the response is not ok
        navigate("/");
        return;
      }

    } catch (error) {
      setError(error.message); // Set the error message for display
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default AuthUser;
