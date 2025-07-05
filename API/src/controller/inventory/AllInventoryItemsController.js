const db = require("../../config/mysql/db");

exports.getAll = async (req, res) => {
  try {
    const [results] = await db.query(
      "SELECT item_id,item_name,quantity,price_per_pcs,AddedAt,updatedAt FROM inventory ORDER BY item_id DESC"
    );
    res.status(200).json({
      type: "success",
      data: results,
    });
  } catch (err) {
    console.error("Error fetching inventory:", err);
    res.status(500).json({ message: "Error fetching inventory" });
  }
};
