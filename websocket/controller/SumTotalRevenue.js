const db = require("../model/db");

const sumTotalRevenue = async (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected:", socket.id);
    const sendTotalRevenue = async () => {
      try {
        const sql = "SELECT SUM(total_price) as Revenue FROM orders;"
        const [result] = await db.query(sql);
        io.emit("SumTotalRevenue", {Revenue : parseInt(result[0].Revenue)});
      

      } catch (error) {
        console.error("Database query failed:", error.message);
        io.emit("Error", "Failed to fetch product totals");
      }
    };

    sendTotalRevenue();
    socket.on("TotalRevenue", () => {
        sendTotalRevenue();
    })

  });
};

module.exports = sumTotalRevenue;