const db = require("../../db");
const moment = require("moment");

exports.add = async (req, res) => {
  const { cart_session_id, customer_name, payment_method } = req.body;

  // Validate inputs
  if (!cart_session_id || !customer_name || !payment_method) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  // Standardized date format
  const orderDate = moment().format('LL');
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    // Fetch all cart items for the session
    const [cartItems] = await connection.query(
      `SELECT * FROM cart WHERE cart_session_id = ?`,
      [cart_session_id]
    );

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Insert cart items into the orders table
    const insertPromises = cartItems.map((item) =>
      connection.query(
        `INSERT INTO orders (
          cart_session_id, 
          product_id, 
          product_name, 
          quantity, 
          price, 
          total_price, 
          payment_method, 
          customer_name, 
          order_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.cart_session_id,
          item.product_id,
          item.product_name,
          item.quantity,
          item.price,
          item.total_price,
          payment_method,
          customer_name,
          orderDate,
        ]
      )
    );

    await Promise.all(insertPromises);

    // Clear the cart after checkout
    await connection.query(`DELETE FROM cart WHERE cart_session_id = ?`, [
      cart_session_id,
    ]);

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
