import React, { useState } from "react";
import { FaBars, FaBox, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoCafeSharp, IoClose } from "react-icons/io5";
import { MdRestaurantMenu, MdWarehouse } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonLogout from "../Button/ButtonLogout";
import ProfileButton from "../Profile/ProfileButton";
import ProfileName from "../Profile/ProfileName";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen fixed">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-16"
        } bg-[#272525] text-white h-full transition-all duration-300`}
      >
        {/* Toggle Button */}
        <div className="p-4 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Sidebar"
            aria-expanded={isOpen}
            className={`focus:outline-none text-gray-300 transition-transform duration-300 ${
              isOpen ? "rotate-90 " : "rotate-0 "
            }`}
          >
            {isOpen ? (
              <IoClose className="hover:text-red-500" size={24} />
            ) : (
              <FaBars className="hover:text-green-500" size={24} />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-3">
          <ul className="space-y-4">
            <li>
              <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <span>
                  <FaHome />
                </span>
                {isOpen && (
                  <Link to="/pages/Dashboard">
                    <span>Dashboard</span>
                  </Link>
                )}
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <span>
                  <MdRestaurantMenu />
                </span>
                {isOpen && (
                  <Link to="/pages/Menu">
                    <span>Menu</span>
                  </Link>
                )}
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <span>
                  <MdWarehouse />
                </span>
                {isOpen && (
                  <Link to="/pages/Inventory">
                    <span>Inventory</span>
                  </Link>
                )}
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <span>
                  <FaBox />
                </span>
                {isOpen && (
                  <Link to="/pages/Product/list">
                    <span>Products</span>
                  </Link>
                )}
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <span>
                  <IoCafeSharp />
                </span>
                {isOpen && (
                  <Link to="/pages/Cafe/Branch">
                    <span>Cafe Branch</span>
                  </Link>
                )}
              </a>
            </li>
            <div className="w-auto border border-gray-200 "></div>
            <div className="mt-9">
              <div className="flex flex-col w-auto gap-6">
                <div className="space-x-2 p-2 flex gap-5 hover:bg-gray-700 rounded-md">
                  <ProfileButton />
                  {isOpen && <ProfileName />}
                </div>
                <li>
                  <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                    <span>
                      <FiLogOut />
                    </span>
                    {isOpen && <ButtonLogout />}
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBarMenu;
