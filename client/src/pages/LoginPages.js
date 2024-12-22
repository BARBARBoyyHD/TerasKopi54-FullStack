import React, { useEffect, useState } from "react";
import NavbarLoginPages from "../component/Navbar/NavbarLoginPages";
import LoginForm from "../component/Login/LoginForm";
import discuss from "../asset/discuss.png";
const LoginPages = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <NavbarLoginPages />
      </header>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-screen border ">
        <div className="w-full h-full  ">
          <LoginForm />
        </div>
        {isMobile && (
          <div>
            <img src={discuss} alt="" className="w-auto h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPages;
