const db = require("../../config/mysql/db");

exports.SalesReport = async (req, res) => {
  try {
    const { range, start, end } = req.query;
    const year = new Date().getFullYear();

    let dateCondition = "";
    let params = [];

    if (range === "today") {
      dateCondition = "WHERE DATE(order_date) = ?";
      params = [new Date().toISOString().split("T")[0]];
    } else if (range === "7days") {
      const from = new Date();
      from.setDate(from.getDate() - 6);
      dateCondition = "WHERE DATE(order_date) BETWEEN ? AND ?";
      params = [
        from.toISOString().split("T")[0],
        new Date().toISOString().split("T")[0],
      ];
    } else if (range === "30days") {
      const from = new Date();
      from.setDate(from.getDate() - 29);
      dateCondition = "WHERE DATE(order_date) BETWEEN ? AND ?";
      params = [
        from.toISOString().split("T")[0],
        new Date().toISOString().split("T")[0],
      ];
    } else if (start && end) {
      dateCondition = "WHERE DATE(order_date) BETWEEN ? AND ?";
      params = [start, end];
    }
    // ✅ else: no condition or params — fetch all data

    const [productCount] = await db.query(
      "SELECT COUNT(product_id) as total_product FROM product"
    );

    const [revenueResult] = await db.query(
      `SELECT SUM(total_price) as total_revenue FROM orders ${dateCondition}`,
      params
    );

    const [orderCount] = await db.query(
      `SELECT COUNT(order_id) as total_orders FROM orders ${dateCondition}`,
      params
    );

    const [averageOrder] = await db.query(
      `SELECT AVG(total_price) as average_order FROM orders ${dateCondition}`,
      params
    );

    const [monthlyRevenue] = await db.query(
      `
      SELECT 
        MONTH(order_date) AS month_number,
        MONTHNAME(order_date) AS month,
        SUM(total_price) AS revenue
      FROM orders
      ${
        dateCondition ? dateCondition + " AND" : "WHERE"
      } order_date <> '0000-00-00'
      GROUP BY MONTH(order_date), MONTHNAME(order_date)
      ORDER BY MONTH(order_date)
      `,
      params
    );

    const [topProducts] = await db.query(
          `
      SELECT 
        product_name,
        SUM(quantity_order) AS total_sold
      FROM orders
      ${dateCondition ? dateCondition + " AND" : "WHERE"} order_date <> '0000-00-00'
      GROUP BY product_name
      ORDER BY total_sold DESC
      LIMIT 5
      `,
      params
    );

    const allMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const revenueByMonth = allMonths.map((name, index) => {
      const match = monthlyRevenue.find((m) => m.month_number === index + 1);
      return {
        month: name.slice(0, 3),
        revenue: match ? match.revenue : 0,
      };
    });

    const avgOrder = parseFloat(averageOrder[0].average_order || 0).toFixed(2);

    return res.status(200).json({
      success: true,
      product: productCount[0].total_product,
      revenue: revenueResult[0].total_revenue || 0,
      order: orderCount[0].total_orders || 0,
      avgOrder: Number(avgOrder),
      revenue_timeseries: revenueByMonth,
      topProducts: topProducts,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
