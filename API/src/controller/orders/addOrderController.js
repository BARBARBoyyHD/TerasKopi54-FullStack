const db = require("../../config/mysql/db");
const moment = require("moment");

exports.add = async (req, res) => {
  const { customer_name, payment_method, total_price, cartItems } = req.body;

  // Validate inputs
  if (
    !customer_name ||
    !payment_method ||
    !cartItems ||
    cartItems.length === 0
  ) {
    return res
      .status(400)
      .json({ message: "Missing required fields or empty cart" });
  }

  // Standardized date format
  const orderDate = moment().format("LL");
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    // Insert orders into the database
    const insertPromises = cartItems.map((item) =>
      connection.query(
        `INSERT INTO orders (
          product_id, 
          product_name, 
          quantity_order, 
          price, 
          total_price, 
          payment_method, 
          customer_name, 
          order_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.product_id,
          item.product_name,
          item.quantity,
          item.price,
          total_price,
          payment_method,
          customer_name,
          orderDate,
        ]
      )
    );

    await Promise.all(insertPromises);

    // Commit transaction
    await connection.commit();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    await connection.rollback();
    console.error(error);
    res.status(500).json({ message: "Error processing checkout" });
  } finally {
    connection.release(); // Ensure the connection is released
  }
};
