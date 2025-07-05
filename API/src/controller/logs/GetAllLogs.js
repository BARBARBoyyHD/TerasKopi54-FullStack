const mysql2 = require("../../config/mysql/db");

exports.getAllLogs = async (req, res) => {
  try {
    const { range, start, end } = req.query;

    let dateCondition = "";
    let params = [];

    // Today's logs
    if (range === "today") {
      dateCondition = "WHERE DATE(log_time) = ?";
      params = [new Date().toISOString().split("T")[0]];

      // Last 7 days (including today)
    } else if (range === "7days") {
      const from = new Date();
      from.setDate(from.getDate() - 6);
      dateCondition = "WHERE DATE(log_time) BETWEEN ? AND ?";
      params = [
        from.toISOString().split("T")[0],
        new Date().toISOString().split("T")[0],
      ];

      // Last 30 days
    } else if (range === "30days") {
      const from = new Date();
      from.setDate(from.getDate() - 29);
      dateCondition = "WHERE DATE(log_time) BETWEEN ? AND ?";
      params = [
        from.toISOString().split("T")[0],
        new Date().toISOString().split("T")[0],
      ];

      // Custom range
    } else if (start && end) {
      dateCondition = "WHERE DATE(log_time) BETWEEN ? AND ?";
      params = [start, end];
    }

    // Base query with optional WHERE
    const sql = `
      SELECT log_id, user_id, message, log_time 
      FROM logs 
      ${dateCondition}
      ORDER BY log_time DESC
    `;

    const [result] = await mysql2.query(sql, params);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching logs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
