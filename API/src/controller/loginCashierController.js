require("dotenv").config();
const db = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const generateCSRF = () => {
  return crypto.randomBytes(20).toString("hex");
};

const generateAccessToken = (user) => {
  const token = jwt.sign(
    { id: user.user_id, username: user.username, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
  console.log("Generated Access Token:", jwt.decode(token)); // Decode and log the token
  return token;
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.user_id, username: user.username, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const [results] = await db.query(
      "SELECT user_id, username, password_hash, role FROM users WHERE username = ?",
      [username]
    );

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const userData = results[0];
    const validPassword = await bcrypt.compare(
      password,
      userData.password_hash
    );

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generate tokens and CSRF
    const accessToken = generateAccessToken(userData);
    const refreshToken = generateRefreshToken(userData);
    const CSRF = generateCSRF();

    // Store refresh token in the database
    await db.query("UPDATE users SET refreshToken = ? WHERE user_id = ?", [
      refreshToken,
      userData.user_id,
    ]);

    // Set cookies (exclude role)
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000, // 15 minutes
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .cookie("CSRF-TOKEN", CSRF, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000, // 1 hour
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

    // Send response (include role in response, not in cookies)
    return res.status(200).json({
      message: "Login successful",
      userId: userData.user_id,
      username: userData.username,
      role: userData.role,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
