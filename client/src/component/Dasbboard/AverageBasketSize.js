import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:8080");
const AverageBasketSize = () => {
  const [AverageBasketSize, setAverageBasketSize] = useState(0);
  useEffect(() => {
    socket.on("AverageBasketSize", (data) => {
      setAverageBasketSize(data);
      return () => {
        socket.off("AverageBasketSize");
      };
    });
  }, [socket]);

  return (
    <div className="flex flex-row justify-center items-center">
      <h1 className="text-[40px]">{AverageBasketSize}</h1>
      <p className="">/basket</p>
    </div>
  );
};

export default AverageBasketSize;
