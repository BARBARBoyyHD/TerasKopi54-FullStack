const db = require("../../db");

exports.add = async (req, res) => {
    try {
        const { product_id, quantity,price,total_price } = req.body;

        // Validate the input
        if (!product_id || !quantity) {
            return res.status(400).json({
                message: "Product ID and quantity are required"
            });
        }

        // Check if the product exists in the products table
        const productQuery = "SELECT * FROM product WHERE product_id = ?";
        const [product] = await db.query(productQuery, [product_id]);

        if (product.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Extract product details
        const { product_name, product_category } = product[0];

        // Insert the item into the cart table
        const sql = "INSERT INTO cart (product_id, product_name, product_category, quantity,price,total_price) VALUES (?, ?, ?, ?, ?, ?)";
        const [result] = await db.query(sql, [product_id, product_name, product_category, quantity,price,total_price]);

        if (result.affectedRows > 0) {
            return res.status(200).json({
                message: "Item added to cart"
            });
        } else {
            return res.status(400).json({
                message: "Item not added to cart"
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
