import React, { useEffect, useState } from "react";
import { FaBars, FaBox, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoCafeSharp, IoClose } from "react-icons/io5";
import { MdRestaurantMenu, MdWarehouse } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonLogout from "../Button/ButtonLogout";
import ProfileButton from "../Profile/ProfileButton";
import ProfileName from "../Profile/ProfileName";
import useAuthRole from "../../utils/AuthRole";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isManagerAdmin = useAuthRole();

  return (
    <div className="flex h-screen fixed">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-16"
        } bg-[#272525] text-white h-full transition-all duration-300`}
      >
        {/* Toggle Button */}
        <div className="p-4 flex justify-between items-center justify-center">
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
        <nav className="mt-3 flex flex-col justify-center ">
          <ul className="space-y-4 flex flex-col justify-center items-center">
            {isManagerAdmin && (
              <li>
                <Link to="/pages/Dashboard">
                  <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                    <span>
                      <FaHome />
                    </span>
                    {isOpen && <span>Dashboard</span>}
                  </a>
                </Link>
              </li>
            )}

            <li>
              <Link to="/pages/Menu">
                <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                  <span>
                    <MdRestaurantMenu />
                  </span>
                  {isOpen && <span>Menu</span>}
                </a>
              </Link>
            </li>
            <li>
              <Link to="/pages/Inventory">
                <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                  <span>
                    <MdWarehouse />
                  </span>
                  {isOpen && <span>Inventory</span>}
                </a>
              </Link>
            </li>
            <li>
              <Link to="/pages/Product/list">
                <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                  <span>
                    <FaBox />
                  </span>
                  {isOpen && <span>Products</span>}
                </a>
              </Link>
            </li>
            <li>
              <Link to="/pages/logs">
                <a className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                  <span>
                    <FaRegMessage />
                  </span>
                  {isOpen && <span>Logs</span>}
                </a>
              </Link>
            </li>
            <div className="w-[100%] border border-gray-200 "></div>
            <div className="mt-9">
              <div className="flex flex-col w-auto gap-6">
                <div className="space-x-2 p-2 flex gap-5 hover:bg-gray-700 rounded-md">
                  <ProfileButton />
                  {isOpen && <ProfileName />}
                </div>
                <li className="flex justify-center items-center">
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
