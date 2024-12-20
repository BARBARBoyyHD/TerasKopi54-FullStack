const db = require("../model/db");

const getMonthlyRevenue = async (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected:", socket.id);
    const sendMonthlyRevenue = async () => {
      try {
        const sql =
          "SELECT DATE_FORMAT(STR_TO_DATE(order_date, '%e %M %Y'), '%M %Y') AS Month, SUM(total_price) AS Revenue FROM orders GROUP BY Month ORDER BY STR_TO_DATE(order_date, '%e %M %Y') DESC";
        const [result] = await db.query(sql);

        io.emit("MonthlyRevenue", result);
        console.log(result);

      } catch (error) {
        console.error("Database query failed:", error.message);
        io.emit("Error", "Failed to fetch product totals");
      }
    };

    sendMonthlyRevenue();
    socket.on("MonthlyRevenue", () => {
        sendMonthlyRevenue();
    })

  });
};

module.exports = getMonthlyRevenue;