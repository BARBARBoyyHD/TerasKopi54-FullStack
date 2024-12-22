import { useState, useEffect } from "react";

const useAuthRole = () => {
  const [isManagerAdmin, setIsManagerAdmin] = useState(false);

  const handleAuthUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/dashboard", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();

        if (data.user_role === "Admin" || data.user_role === "Manager") {
          setIsManagerAdmin(true);
        } else {
          setIsManagerAdmin(false);
        }
      } else {
        setIsManagerAdmin(false);
      }
    } catch (error) {
      console.error(error);
      setIsManagerAdmin(false);
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, []);

  return isManagerAdmin;
};

export default useAuthRole;
