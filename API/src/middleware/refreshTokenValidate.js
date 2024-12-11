require("dotenv").config();
const jwt = require("jsonwebtoken")
const validateRefreshToken = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(403).json({
      message: "access denied",
    });
  }
  try {

    const verified = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET)
    req.user = verified

    next()
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = validateRefreshToken
