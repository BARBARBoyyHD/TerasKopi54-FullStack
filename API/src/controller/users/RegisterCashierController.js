const db = require("../../config/mysql/db");
const bcrypt = require("bcrypt");
const moment = require("moment");
const crypto = require("crypto");

const generateRefreshToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

exports.register = async (req, res) => {
  try {
    const { username, password, contact, role } = req.body;
    const refreshToken = generateRefreshToken();
    const createdAt = moment().format("LL");

    if (username.length < 6) {
      return res.status(400).json({
        message: "username atleast 6 words",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "username atleast 6 words",
      });
    }

    const findUsername = "SELECT * FROM users WHERE username = ?";
    const [find] = await db.query(findUsername, [username]);
    if (find.length) {
      return res.status(400).json({
        message: "user is already exist",
      });
    }
    // Hash the password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database
    const query =
      "INSERT INTO users (username, password_hash, contact,created_at,refreshToken,role) VALUES (?, ?, ?,?,?,?)";

    // Use promise-based query
    const [results] = await db.query(query, [
      username,
      password_hash,
      contact,
      createdAt,
      refreshToken,
      role,
    ]);

    res.status(201).json({
      message: "success",
      id: results.insertId,
      username,
      role,
      contact,
      createdAt,
      refreshToken,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
