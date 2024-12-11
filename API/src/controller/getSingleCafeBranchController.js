const db = require("../../db");

exports.getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM cafe_branch WHERE id_branch = ?";

    const [result] = await db.query(sql, [id]);
    if (result.length === 0) {
      return res.status(404).json({
        message: "Not Found",
      });
    } else {
      return res.status(200).json({
        type: "success",
        data: result[0],
      });
    }
  } catch (error) {
    console.error(err); // Logging the error for debugging
    return res.status(500).send("An error occurred while fetching data");
  }
};
