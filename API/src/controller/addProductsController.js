const db = require("../../db");

exports.add = async (req, res) => {
  try {
    const { product_name, product_category, price } = req.body;

    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Validate image format
    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFormats.includes(req.file.mimetype)) {
      return res.status(400).json({
        message: "Invalid image format. Only JPG and PNG are allowed.",
      });
    }

    const image_url = req.file.filename;

    const sql = `
      INSERT INTO product (
        product_name, 
        product_category, 
        price, 
        image_url
      ) VALUES (?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
      product_name,
      product_category,
      price,
      image_url,
    ]);

    if (result.affectedRows > 0) {
      return res.status(201).json({ message: "Product added successfully" });
    } else {
      return res.status(400).json({ message: "Failed to add product" });
    }
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
