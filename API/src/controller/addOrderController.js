const db = require("../../db");
const moment = require("moment");

exports.add = async (req, res) => {
  const { orders, total_amount } = req.body;

  if (!orders || orders.length === 0) {
    return res.status(400).json({ message: "No items in the cart" });
  }

  const orderDate = moment().format('LL'); // Correct date format
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    // Insert each order item
    const insertPromises = orders.map((order) =>
      connection.query(
        `INSERT INTO orders (
          customer_name, 
          payment_method, 
          product_id, 
          product_name, 
          variant_type, 
          quantity_order, 
          price, 
          total_price, 
          order_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          order.customer_name,
          order.payment_method,
          order.product_id,
          order.product_name,
          order.variant_type,
          order.quantity_order,
          order.price,
          order.total_price,
          orderDate, // Pass the formatted date here
        ]
      )
    );

    await Promise.all(insertPromises);

    await connection.commit();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    await connection.rollback();
    console.error(error);
    res.status(500).json({ message: "Error placing order" });
  } finally {
    connection.release(); // Ensure the connection is released
  }
};
