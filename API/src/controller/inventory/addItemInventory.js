const db = require("../../config/mysql/db");
const moment = require("moment");
const logServices = require("../../services/LogServices");

exports.addItem = async (req, res) => {
  try {
    const { item_name, quantity, price_per_pcs } = req.body;
    const addedAt = moment().format("YYYY-MM-DD");

    const addItemQuery =
      "INSERT INTO inventory (item_name, quantity, price_per_pcs, AddedAt) VALUES (?, ?, ?, ?)";
    const [result] = await db.query(addItemQuery, [
      item_name,
      quantity,
      price_per_pcs,
      addedAt,
    ]);

    await logServices(req, `Inventory item added: "${item_name}"`);

    return res.status(201).json({
      message: "Item added successfully",
      itemId: result.insertId,
    });
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ message: "Error adding item" });
  }
};
