import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileName = () => {
  const navigate = useNavigate();
  const handleToProfile = () => {
    navigate("/pages/user/profile");
  };
  return (
    <button onClick={handleToProfile} className="flex flex-col">
      <h1 className="text-[20px] font-bold">Uwi</h1>
      <p className="text-[10px] text-green-400">Admin</p>
    </button>
  );
};

export default ProfileName;
