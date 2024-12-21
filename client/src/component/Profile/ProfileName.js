import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux"; // Ensure this action is correctly set up
import { useDispatch, useSelector } from "react-redux";

const ProfileName = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Destructure loading, data, and error from the Redux state
  const { loading, data, error } = useSelector((state) => state.getUserProfile);

  useEffect(() => {
    // Dispatch action to get user profile when component mounts
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleToProfile = () => {
    navigate("/pages/user/profile");
  };

  return (
    <button onClick={handleToProfile} className="flex flex-col">
      {/* Display loading, error, or data */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          {/* Dynamically display username and role */}
          <h1 className="text-[20px] font-bold">{data?.username || "User"}</h1>
          <p className="text-[10px] text-green-400">{data?.role || "User"}</p>
        </>
      )}
    </button>
  );
};

export default ProfileName;
