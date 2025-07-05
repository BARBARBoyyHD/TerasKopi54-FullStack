const db = require("../../config/mysql/db");
const logServices = require("../../services/LogServices");

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Check if item exists
    const [itemRows] = await db.query(
      "SELECT item_name FROM inventory WHERE item_id = ?",
      [id]
    );

    if (itemRows.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    const itemName = itemRows[0].item_name;

    // 2. Delete the item
    const deleteItem = "DELETE FROM inventory WHERE item_id = ?";
    const [result] = await db.query(deleteItem, [id]);

    if (result.affectedRows > 0) {
      // 3. Log the action
      await logServices(req, `Inventory item deleted: "${itemName}"`);
      return res.status(200).json({ message: "Item deleted successfully" });
    } else {
      return res.status(400).json({ message: "Failed to delete item" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
