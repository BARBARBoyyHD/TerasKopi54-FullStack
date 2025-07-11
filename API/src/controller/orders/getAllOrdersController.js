const db = require("../../config/mysql/db");


exports.getAll = async (req, res) => {
  try {
    const sql = "SELECT * FROM orders ORDER BY order_id DESC";
    const [result] = await db.query(sql);
    if (result.length === 0) {
      return res.status(404).json({
        message: "Not found",
      });
    } else {
      return res.status(200).json({
        type: "success",
        data: result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Interanl Server Error",
    });
  }
};
