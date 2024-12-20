const db = require("../model/db");

const getAllOrders = async(io)=>{
    io.on("connection",async(socket)=>{
        console.log("User connected:", socket.id);

        const sendAllOrders = async()=>{
            try {
                
                const sql = "SELECT order_id, product_id,product_name,product_category,customer_name,payment_method,quantity_order,total_price,order_date FROM orders ORDER BY order_id DESC";
                const [result] = await db.query(sql);

                io.emit("AllOrders", result);

            } catch (error) {
                console.error("Database query failed:", error.message);
                io.emit("Error", "Failed to fetch product totals");
            }
        }

        sendAllOrders();
        socket.on("GetAllOrders",()=>{
            sendAllOrders();
        })
    })
}

module.exports = getAllOrders