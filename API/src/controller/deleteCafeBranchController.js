const db = require("../../db");

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM cafe_branch where id_branch = ?";

    const [result] = await db.query(sql, [id]);
    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: "Cafe Branch Deleted Successfully",
      });
    } else {
      return res.status(404).json({
        message: "Failed to delete",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
