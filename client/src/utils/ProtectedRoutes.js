import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
  // Retrieve tokens from cookies using js-cookie
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  const csrfToken = Cookies.get("CSRF-TOKEN");

  // Check if user is authenticated based on access token
  console.log("accessToken:", accessToken);
  console.log("refreshToken:", refreshToken);
  console.log("csrfToken:", csrfToken);
  if (!accessToken) {
    return <Navigate to="/" />;
  }
 

  return <Outlet />;
};

export default ProtectedRoutes;
