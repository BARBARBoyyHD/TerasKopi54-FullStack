import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const TryingSocket = () => {
  const [text, setText] = useState("");
  const [countItemSold, setCountItemSold] = useState("");
  const [sumAllProduct, setSumAllProduct] = useState("");
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [MonthlyRevenue, setMonthlyRevenue] = useState([]);
  const [abs, setABS] = useState(0);
  useEffect(() => {
    // Listen for "text" and "CountItemSold" events
    socket.on("text", (data) => {
      setText(data);
    });

    socket.on("CountItemSold", (data) => {
      setCountItemSold(data);
    });

    socket.on("SumAllProduct", (data) => {
      setSumAllProduct(data);
    });
    socket.on("SumTotalRevenue", (data) => {
      setTotalRevenue(data.Revenue);
    });

    socket.on("MonthlyRevenue", (data) => {
      setMonthlyRevenue(data);
    });
    socket.on("AverageBasketSize", (data) => {
        setABS(data)
    })

    // Cleanup listeners on component unmount
    return () => {
      socket.off("text");
      socket.off("CountItemSold");
      socket.off("SumAllProduct");
      socket.off("SumTotalRevenue");
      socket.off("AverageBasketSize")
    };
  }, [socket]);

  return (
    <div>
      <h1>Trying Socket</h1>
      <p>{text}</p>
      <p>Revenue : {totalRevenue}</p>
      <p> Average Basket Size: {abs}</p>
      <p>Items Sold: {countItemSold}</p>
      <h1>Top Product</h1>
      {sumAllProduct && (
        <div>
          <h2>Sum All Product</h2>
          <ul>
            {sumAllProduct.map((item) => (
              <li key={item.product_id}>
                {item.product_name}: {item.total_quantity_sold}
              </li>
            ))}
          </ul>
        </div>
      )}
      <h1>Monthly Revenue</h1>
      <ul>
        {MonthlyRevenue.map((item, index) => (
          <li key={index}>
            {item.Month || "Unknown Month"} = Rp. {item.Revenue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TryingSocket;
