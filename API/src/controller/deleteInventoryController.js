const db = require("../../db");

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = "DELETE FROM inventory WHERE item_id = ?";

    const [result] = await db.query(deleteItem, [id]);
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Item deleted successfully" });
    } else {
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
