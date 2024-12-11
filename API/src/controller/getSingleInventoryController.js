const db = require("../../db");

exports.getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM inventory WHERE item_id = ?";

    // Await the query execution
    const [result] = await db.query(sql, [id]);

    if (result.length === 0) {
      return res.status(404).json({
        message: "Item Not Found",
      });
    }

    return res.status(200).json({
      type: "success",
      data: result[0],
    });

  } catch (error) {
    console.error("Error fetching item:", error); 
    res.status(500).json({ message: "Error fetching item" });
  }
};
