import React, { useEffect, useState } from "react";
import NavbarLoginPages from "../component/Navbar/NavbarLoginPages";
import RegisterForm from "../component/Register/RegisterForm";
import discuss from "../asset/discuss.png";
const RegisterUserPages = () => {
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
      <header>
        <NavbarLoginPages />
      </header>
      <div className="flex justify-center items-center min-h-screen border ">
        <div className="w-full h-full  ">
          <RegisterForm />
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

export default RegisterUserPages;
