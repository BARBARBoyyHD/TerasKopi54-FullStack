import React from "react";
import ButtonLogin from "../component/Button/ButtonLogin";
import NavbarHomePages from "../component/Navbar/NavbarHomePages";

const HomePage = () => {
  return (
    <div className="bg-stone-800 min-h-screen flex flex-col">
      {/* Navbar Section */}
      <header>
        <NavbarHomePages />
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-grow text-center px-4">
        <h1 className="text-gray-50 font-bold text-6xl md:text-sm sm:text-sm lg:text-7xl mb-6">
          Welcome to MyTerasKopi
        </h1>
        <ButtonLogin />
      </main>
    </div>
  );
};

export default HomePage;
