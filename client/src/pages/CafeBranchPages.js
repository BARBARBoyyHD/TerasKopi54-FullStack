import React from "react";
import NavbarDashboard from "../component/Navbar/NavbarDashboard";
import SideBarMenu from "../component/Sidebar/SideBarMenu";
const CafeBranchPages = () => {
  return (
    <div className="min-h-screen w-[auto]bg-zinc-100fl ex flex-col ">
      {/* Header with Navbar */}
      <header className="bg-transparent">
        <NavbarDashboard />
      </header>

      {/* Main Content */}
      <main className="mt-[73px] min-h-screen flex flex-row ">
        <div className="border border-black">
          <SideBarMenu />
        </div>
        <div className="bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Cafe Branch
          </h1>
          <p className="mt-4 text-gray-600">
            Your dashboard content goes here. Customize it to your needs!
          </p>
        </div>
      </main>
    </div>
  );
};

export default CafeBranchPages;
