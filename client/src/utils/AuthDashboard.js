import { Outlet, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../component/Loading/LoadingSpinner";

const AuthDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const handleAuthUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/dashboard", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();

        if(data.user_role === "Admin" || data.user_role === "Manager"){
          setIsAuthenticated(true);
        }
        else{
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, []);
  if (isAuthenticated === null) {
    return (
      <div
        className={`transition-opacity duration-500 ${
          isAuthenticated === null ? "opacity-100" : "opacity-0"
        }`}
      >
        {isAuthenticated === null && <div className="flex justify-center items-center"><LoadingSpinner /></div>}
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/pages/Menu" />;
};

export default AuthDashboard;
