const mysql2 = require("../config/mysql/db");
const jwt = require("jsonwebtoken");

// Log action with decoded user ID

const log = async (req, message) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      console.error("Log service: No token found");
      return;
    }

    // Decode token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user_id = decoded.id;
    const username = decoded.username;
    const role = decoded.role;
    const fullMessage = `${message} by ${username} (${role})`;
    // Insert into logs table
    await mysql2.query("INSERT INTO logs (user_id, message) VALUES (?, ?)", [
      user_id,
      fullMessage,
    ]);

    console.log(`Log added: user_id=${user_id}, message="${message}"`);
  } catch (error) {
    console.error("Log service error:", error.message);
  }
};

module.exports = log;
