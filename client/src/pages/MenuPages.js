import React, { useEffect, useState } from 'react'
import NavbarDashboard from '../component/Navbar/NavbarDashboard'
import SideBarMenu from '../component/Sidebar/SideBarMenu'

const MenuPages = () => {
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
        <div className="w-full max-w-screen-lg min-h-screen shadow-md rounded-lg p-4  bg-black  md:ml-0 md:mx-auto">
          <div className="flex mb-4 justify-center justify-between md:flex-col md:justify-start">
            <h1 className=" text-white text-2xl font-bold flex justify-center items-center">
              This Month Overview
            </h1>
            <h1 className="text-2xl font-bold">Sort by</h1>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto  flex flex-wrap justify-center gap-3">
              <div className="text-white w-[300px] h-[200px] rounded-md border border-red-600 flex justify-center items-center">
                Revenue
              </div>
              <div className="text-white w-[300px] h-[200px] rounded-md border border-red-600 flex justify-center items-center">
                ItemSold
              </div>
              <div className="text-white w-[300px] h-[200px] rounded-md border border-red-600 flex justify-center items-center">
                ABS
              </div>
            </div>
            <div className="w-auto  flex flex-wrap justify-center gap-3 mt-2">
              <div className="text-white w-[615px] h-[300px] border rounded-md border-red-600 flex justify-center items-center">
                Chart Monthly
              </div>
              <div className="text-white w-[300px] h-[300px] rounded-md border border-red-600 flex justify-center items-center">
                Top Product
              </div>
            </div>
            <div className="w-auto flex flex-wrap justify-center gap-3 mt-2">
              <div className="text-white w-[930px] h-[600px] rounded-md border border-red-600 flex justify-center items-center">
                Order Details
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MenuPages