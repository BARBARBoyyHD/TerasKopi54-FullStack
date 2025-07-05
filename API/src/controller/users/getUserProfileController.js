const db = require("../../config/mysql/db");
const jwt = require("jsonwebtoken");

exports.get = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    res.status(401).json({
      message: "No Token Provided",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user_id = decoded.id;
    const sql = "SELECT * FROM users WHERE user_id = ?";
    const [result] = await db.query(sql, [user_id]);
    if (result.length === 0) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({
      user_id: result[0].user_id,
      username: result[0].username,
      contact: result[0].contact,
      role: result[0].role,
      image: result[0].userImage,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
