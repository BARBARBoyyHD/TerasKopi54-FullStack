import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarLoginPages = () => {
  const navigate = useNavigate();

  const handleHomePages = ()=>{
    navigate("/")
  }
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-white text-2xl font-bold">
        <button
          onClick={handleHomePages}
          className="px-6 py-3 bg-green-50 text-green-600 font-bold rounded-lg shadow-lg hover:bg-green-500  hover:text-emerald-50 active:bg-emerald-50 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
        >
          Home
        </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavbarLoginPages
