import React, { useState, useEffect } from "react";
import NavbarDashboard from "../component/Navbar/NavbarDashboard";
import SideBarMenu from "../component/Sidebar/SideBarMenu";
import DashboardPanel from "../component/Dasbboard/DashboardPanel";
import AuthUser from "../component/AuthUser/AuthUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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


  const handleResize = () => {
    // Check if the window width is less than the breakpoint for mobile (e.g., 768px)
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount to set initial state
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col ">
      {/* Header with Navbar */}
      <AuthUser/>
      <header className="bg-transparent fixed top-0 w-full z-10">
        <NavbarDashboard />
      </header>

      {/* Main Content */}
      <main className="mt-[65px]  flex flex-row gap-2">
        {/* Sidebar - Conditionally Rendered */}
        {!isMobile && (
          <div className="w-[4%] ">
            <SideBarMenu />
          </div>
        )}

        {/* Dashboard Content */}
        <DashboardPanel/>
      </main>
    </div>
  );
};

export default Dashboard;
