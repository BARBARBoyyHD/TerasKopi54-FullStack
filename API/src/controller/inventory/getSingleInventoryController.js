const db = require("../../config/mysql/db");


exports.getSingle = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the ID parameter
    if (!/^\d+$/.test(id)) {
      return res.status(400).json({ message: "Invalid item ID format" });
    }

    const sql = "SELECT * FROM inventory WHERE item_id = ?";

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
    console.error(
      `Error fetching item with ID ${req.params.id}:`,
      error.message
    );
    return res.status(500).json({ message: "Error fetching item" });
  }
};
