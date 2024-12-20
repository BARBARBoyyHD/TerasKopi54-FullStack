const db = require("../model/db");

const calculateBasketSize = (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected:", socket.id);

    const sendBasketSize = async () => {
      try {
        const sql = `
          SELECT 
            COUNT(DISTINCT order_id) AS total_orders, 
            SUM(quantity_order) AS total_items_sold
          FROM orders
        `;
        const [result] = await db.query(sql);
        const totalOrders = result[0].total_orders;
        const totalItemsSold = result[0].total_items_sold;

        // Calculate average basket size
        const averageBasketSize = totalOrders > 0 ? (totalItemsSold / totalOrders).toFixed(2) : 0;

        io.emit("AverageBasketSize", averageBasketSize);
        console.log(`Average Basket Size: ${averageBasketSize}`);
      } catch (error) {
        console.error("Database query failed:", error.message);
        io.emit("Error", "Failed to calculate basket size");
      }
    };

    sendBasketSize();

    // Emit again when requested
    socket.on("CalculateBasketSize", () => {
      sendBasketSize();
    });
  });
};

module.exports = calculateBasketSize;
