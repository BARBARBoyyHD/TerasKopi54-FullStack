require("dotenv").config();
const jwt = require("jsonwebtoken");

const validateUserAuth = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(403).json({
      message: "access denied",
    });
  }

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = validateUserAuth;
