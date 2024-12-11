import React from "react";

const NavbarPractice = () => {
  return (
    <nav className="fixed top-0 left-0 w-full border border-black bg-white/30 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-black">Logo</h1>
        </div>
      
        <div className="flex gap-[10px]">
          <h1 className="text-black">Login</h1>
          <h1 className="text-black">Login</h1>
          <h1 className="text-black">Login</h1>
          <h1 className="text-black">Login</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPractice;
