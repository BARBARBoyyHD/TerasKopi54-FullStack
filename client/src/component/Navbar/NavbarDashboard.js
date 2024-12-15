import React, { useEffect, useState } from "react";
import Logo from "../../asset/Teraskopilogo.png";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SideBarMobile from "../Sidebar/SideBarMobile";
import { useSelector } from "react-redux";

const NavbarDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleToCart = () => {
    navigate("/pages/Cart");
  };

  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const cartItems = useSelector((state) => state.addToCart.cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Calculate total quantity from cart items

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#272525]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {isMobile && (
          <button
            className={`text-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 transform transition-transform duration-300 ${
              isSidebarOpen ? "rotate-90" : "rotate-0"
            }`}
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
        )}
        {/* Logo Section */}
        <button
          onClick={handleGoToHome}
          className="flex items-center space-x-4"
        >
          <img src={Logo} alt="Teras Kopi Logo" className="h-12 w-auto" />
        </button>

        {/* Cart Icon */}
        <div className="flex gap-2">
          <button
            className="text-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Cart"
            onClick={handleToCart}
          >
            <FaCartArrowDown size={30} />
          </button>
          <span className="border border-yellow-400 rounded-[50%] w-[20px] h-[20px] flex justify-center items-center bg-yellow-400 font-bold text-black text-[10px]">
            {totalQuantity}
          </span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <SideBarMobile onClose={() => setIsSidebarOpen(false)} />
      )}
    </nav>
  );
};

export default NavbarDashboard;
