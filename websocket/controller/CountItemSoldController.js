const db = require("../model/db");

const CountItemSold = (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected:", socket.id);

    const sendItemCount = async () => {
      try {
        // Query to count the number of orders
        const sql =
          "SELECT SUM(quantity_order) AS total_items_sold FROM orders";
        const [result] = await db.query(sql);

        // Emit the count to all connected clients
        io.emit("CountItemSold", result[0].total_items_sold);
       
      } catch (error) {
        console.error("Database query failed:", error.message);
        socket.emit("Error", "Failed to fetch item count");
      }
    };

    // Send the count when a new client connects
    sendItemCount();

    // Listen for order updates and send the count again
    socket.on("orderPlaced", () => {
      console.log("Order placed, updating count...");
      sendItemCount();
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = CountItemSold;
