import React, { useEffect, useState } from "react";
import LogsComponent from "../component/logsComponents/LogsComponent";
import NavbarDashboard from "../component/Navbar/NavbarDashboard";
import SideBarMenu from "../component/Sidebar/SideBarMenu";
const LogsPages = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <LogsComponent/>
      </main>
    </div>
  );
};

export default LogsPages;
