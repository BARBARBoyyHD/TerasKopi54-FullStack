const jwt = require("jsonwebtoken");
const userLogs = require("../../services/UserLogServices");
exports.logout = async (req, res) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      return res.status(400).json({ message: "No access token found" });
    }

    // decode token to get user info
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    await userLogs.manual(
      decoded.id,
      `User "${decoded.username}" (${decoded.role})  logout`
    );

    // clear cookies
    res
      .status(202)
      .clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .clearCookie("CSRF-TOKEN", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .clearCookie("USERNAME", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .clearCookie("Role", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .json({
        message: "Logout Success",
      });
  } catch (error) {
    console.error("Logout error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
