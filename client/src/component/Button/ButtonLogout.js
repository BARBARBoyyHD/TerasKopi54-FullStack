import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../redux";
import LoadingSpinner from "../Loading/LoadingSpinner";

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, data } = useSelector((state) => state.LogoutUser);

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(LogoutUser(navigate));
  };

  return (
    <div>
      <button onClick={handleLogout} disabled={loading}>
        {loading ? <LoadingSpinner/>: "Logout"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ButtonLogout;
