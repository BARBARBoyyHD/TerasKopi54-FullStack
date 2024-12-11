const db = require("../../db");

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM product WHERE product_id = ?";
    const [result] = await db.query(sql, [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: "item deleted successfully",
      });
    } else {
      return res.status(404).json({
        message: "failed to delete item",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
