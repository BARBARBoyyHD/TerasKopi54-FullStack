const db = require("../../db");

exports.getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM product WHERE product_id = ?";

    const [result] = await db.query(sql, [id]);
    if (result.length === 0) {
      return res.status(404).json({
        message: "Item Not found",
      });
    } else {
      return res.status(200).json({
        type: "success",
        data: result[0],
      });
    }
  } catch (error) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
