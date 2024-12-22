const db = require("../model/db");

const sumAllProduct = (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected:", socket.id);

    // Function to query and send product totals to all clients
    const sendSumProduct = async () => {
      try {
        const sql =
          "SELECT product_id, product_name, SUM(total_price) AS total_quantity_sold FROM orders GROUP BY product_id, product_name ORDER BY total_quantity_sold DESC LIMIT 3";
        const [result] = await db.query(sql);

        // Send updated totals to all clients
        io.emit("SumAllProduct", result);
       
      } catch (error) {
        console.error("Database query failed:", error.message);
        io.emit("Error", "Failed to fetch product totals");
      }
    };

    // Send the totals when a client connects
    sendSumProduct();

    // Listen for "orderPlaced" events to update totals
    socket.on("orderPlaced", () => {
      console.log("Order placed, updating product totals...");
      sendSumProduct();
    });
  });
};

module.exports = sumAllProduct;
