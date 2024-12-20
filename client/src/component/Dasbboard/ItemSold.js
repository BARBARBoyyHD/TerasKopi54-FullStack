import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:8080");
const ItemSold = () => {
  const [ItemSold, setItemSold] = useState(0);
  useEffect(() => {
    socket.on("CountItemSold", (data) => {
        setItemSold(data);
      });
    return () => {
      socket.off("CountItemSold");
    };
  }, [socket]);

  return (
    <div>
      <h1 className="text-[40px]">{ItemSold}</h1>
    </div>
  );
};

export default ItemSold;
