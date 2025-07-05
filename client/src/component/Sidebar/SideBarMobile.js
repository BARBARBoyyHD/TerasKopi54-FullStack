import React, { useEffect, useState } from "react";
import { FaBox, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoCafeSharp, IoClose } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { MdRestaurantMenu, MdWarehouse } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonLogout from "../Button/ButtonLogout";
import ProfileButton from "../Profile/ProfileButton";
import ProfileName from "../Profile/ProfileName";
import useAuthRole from "../../utils/AuthRole";
const SideBarMobile = ({ onClose }) => {
  const [isClosed, setIsClosed] = useState(false);
  const isManagerAdmin = useAuthRole();

  return (
    <div className="fixed inset-0 bg-[#272525] text-white z-50 h-full w-64 shadow-lg transition-all duration-300">
      {/* Close Button */}
      <div className="p-4 flex justify-end">
        <button
          onClick={onClose}
          aria-label="Close Sidebar"
          className={`text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-30 transition-transform duration-300 ${
            isClosed ? "rotate-90" : ""
          }`}
        >
          <IoClose size={24} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-5 p-4">
        <ul className="space-y-4">
          {isManagerAdmin && (
            <li>
              <Link
                to="/pages/Dashboard"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
              >
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/pages/Menu"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <MdRestaurantMenu />
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pages/Inventory"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <MdWarehouse />
              <span>Inventory</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pages/Product/list"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <FaBox />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/pages/logs">
              <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <span>
                  <FaRegMessage />
                </span>
                <span>Logs</span>
              </a>
            </Link>
          </li>
          <div className="w-auto border border-gray-200"></div>
          <div className="space-x-2 p-2 flex gap-2  hover:bg-gray-700 rounded-md">
            <ProfileButton />
            <ProfileName />
          </div>
          <li>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
              <FiLogOut />
              <ButtonLogout />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarMobile;
