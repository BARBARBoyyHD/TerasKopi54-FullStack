require("dotenv").config();
const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  // Get the token from the cookies
  const token = req.cookies?.accessToken;

  // Check if the token is provided
  if (!token) {
    console.error("from autuser : No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Log decoded token for debugging
    

    // Attach the decoded data to req.user
    req.user = decoded;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("Auth User Middleware Error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authUser;
