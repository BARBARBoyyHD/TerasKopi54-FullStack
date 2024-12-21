const db = require("../../db");

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      product_name,
      product_category,
      price, 
    } = req.body;

    // Check if an image is uploaded
    const image_url = req.file ? req.file.filename : null;

    // SQL query to update product with or without a new image
    let sql;
    let params;

    if (image_url) {
      // If a new image is uploaded, update the image URL
      sql = `UPDATE product SET product_name = ?, product_category = ?, price = ?,  image_url = ? WHERE product_id = ?`;
      params = [
        product_name,
        product_category,
        price,
        image_url,
        id,
      ];
    } else {
      // If no new image is uploaded, don't update the image URL
      sql = `UPDATE product SET product_name = ?, product_category = ?, price = ? WHERE product_id = ?`;
      params = [
        product_name,
        product_category,
        price,
        id,
      ];
    }

    // Execute the query
    const [result] = await db.query(sql, params);

    // Check if any rows were affected
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Product updated successfully" });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
