import React from "react";
import NavbarLoginPages from "../component/Navbar/NavbarLoginPages";
import LoginForm from "../component/Login/LoginForm";

const LoginPages = () => {
  return (
    <div className="bg-green-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <NavbarLoginPages />
      </header>

      {/* Main Content */}
      <LoginForm/>
    </div>
  );
};

export default LoginPages;
