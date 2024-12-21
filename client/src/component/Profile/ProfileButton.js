import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux"; // Ensure this action is correctly set up
import { useDispatch, useSelector } from "react-redux";
import profileimg from "../../asset/profile-circle-svgrepo-com.svg";
const ProfileButton = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.getUserProfile);

  useEffect(() => {
    // Dispatch action to get user profile when component mounts
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleToProfile = () => {
    navigate("/pages/user/profile");
  };
  const imageUrl = data?.image ? `http://localhost:5000/${data.image}` : profileimg; 
  return (
    <button onClick={handleToProfile} className="space-x-2 ">
      <div className="w-[50px] text-white border h-[50px] border-white rounded-[50%] hover:border-green-500">
      <img
          src={imageUrl} // Fallback to profileimg if data?.image is null or undefined
          alt="Profile"
          className="w-full h-full rounded-[50%] text-white bg-white"
        />
      </div>
    </button>
  );
};

export default ProfileButton;
