import React, { useEffect } from "react";
import { getUserProfile } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import profileimg from "../../asset/profile-circle-svgrepo-com.svg";
import EditProfileModal from "../Modal/EditProfileModal";

const UserProfileComponent = () => {
  const dispatch = useDispatch();
  
  // Destructure loading, data, and error from the Redux state
  const { loading, data, error } = useSelector((state) => state.getUserProfile);

  useEffect(() => {
    // Dispatch action to get user profile when component mounts
    dispatch(getUserProfile());
  }, [dispatch]);

  if (loading) {
    return <div className="text-white">Loading...</div>; // Display loading indicator
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }
  const imageUrl = data?.image ? `http://localhost:5000/${data.image}` : profileimg; 

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-[20px]">Your Profile</h1>
      <div className="w-[100px] text-white border h-[100px] border-white rounded-[50%] hover:border-green-500">
        <img
          src={imageUrl} // Fallback to profileimg if data?.image is null or undefined
          alt="User profile"
          className="w-full h-full rounded-[50%] bg-cover bg-no-repeat bg-center text-white bg-white"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[20px] text-white font-bold">
          {data?.username || "User"}
        </h1>
        <p className="text-[20px] text-green-400">{data?.role || "User"}</p>
        <p className="text-[20px] text-green-400">{data?.contact || "User"}</p>
      </div>
      <EditProfileModal />
    </div>
  );
};

export default UserProfileComponent;
