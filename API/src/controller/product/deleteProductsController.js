const db = require("../../config/mysql/db");
const logServices = require("../../services/LogServices");

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Fetch the product first
    const [productRows] = await db.query(
      "SELECT product_name FROM product WHERE product_id = ?",
      [id]
    );

    // ✅ Check if product exists
    if (productRows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productName = productRows[0].product_name;

    // 2. Proceed to delete
    const [result] = await db.query(
      "DELETE FROM product WHERE product_id = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      await logServices(req, `Product deleted: "${productName}"`);
      return res.status(200).json({
        message: "Item deleted successfully",
      });
    } else {
      return res.status(400).json({
        message: "Failed to delete item",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
