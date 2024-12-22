import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../component/Loading/LoadingSpinner";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null for loading state

  const handleAuthUser = async () => {
    
    try {
      const res = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        credentials: "include", // Ensure cookies are included
      });
      if (res.ok) {
        const data = await res.json();
        if (data.message === "Access Passed") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error Fetching Data:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, []);

  // Loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div
        className={`transition-opacity duration-500 ${
          isAuthenticated === null ? "opacity-100" : "opacity-0"
        }`}
      >
        {isAuthenticated === null && <div className="flex justify-center items-center min-h-screen bg-black"><LoadingSpinner /></div>}
      </div>
    );
  }
 

  return isAuthenticated ? (
    <Outlet /> // Render child components (like CartPage) if authenticated
  ) : (
    <Navigate to="/pages/login" /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoutes;
