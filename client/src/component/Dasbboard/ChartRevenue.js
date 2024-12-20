import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:8080");

const ChartRevenue = () => {
  const [getRevenue, setGetRevenue] = useState(0);
  useEffect(() => {
    socket.on("SumTotalRevenue", (data) => {
      setGetRevenue(data.Revenue);
    });
    return () => {
      socket.off("SumTotalRevenue");
    };
  }, [socket]);
  return (
    <div>
      <h1 className="text-[40px]">Rp {getRevenue.toLocaleString("id-ID")}</h1>
    </div>
  );
};

export default ChartRevenue;
