import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../redux";

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
        {loading ? "Logging out..." : "Logout"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ButtonLogout;
