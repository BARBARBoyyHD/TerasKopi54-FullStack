const db = require("../../config/mysql/db");
const logServices =  require("../../services/LogServices");
const moment = require("moment");

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { item_name, quantity, price_per_pcs } = req.body;
    const updatedAt = moment().format("LL");
    const editItemQuery = `
      UPDATE inventory 
      SET item_name = ?, quantity = ?, price_per_pcs = ?, updatedAt = ?
      WHERE item_id = ?`;
    const [result] = await db.query(editItemQuery, [
      item_name,
      quantity,
      price_per_pcs,
      updatedAt,
      id,
    ]);

    if (result.affectedRows > 0) {
      await logServices(req, `Inventory item updated: "${item_name}"`);
      return res.status(200).json({ message: "Item updated successfully" });
      
    } else {
      console.log("Item not found");
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    console.error("Error updating item:", err);
    res.status(500).json({ message: "Error updating item" });
  }
};
