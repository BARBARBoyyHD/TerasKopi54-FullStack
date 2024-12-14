import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const navigate = useNavigate();
  const handleToProfile = () => {
    navigate("/pages/user/profile");
  };
  return (
    <button onClick={handleToProfile} className="space-x-2 ">
      <div className="w-[50px] border h-[50px] border-white rounded-[50%] hover:border-green-500"></div>
    </button>
  );
};

export default ProfileButton;
