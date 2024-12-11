const db = require("../../db")
const moment = require("moment");


exports.addItem = async (req, res) => {
  try {
    
    const { item_name, quantity, price_per_pcs } = req.body;
    const addedAt = moment().format('LL'); 

    const addItemQuery =
      "INSERT INTO inventory (item_name, quantity, price_per_pcs,AddedAt) VALUES (?, ?, ?,?)";
    const [result] = await db.query(addItemQuery, [
      item_name,
      quantity,
      price_per_pcs,
      addedAt
    ]);
    res.status(200).json({ message: "Item added successfully" });
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ message: "Error adding item" });
  }
};
