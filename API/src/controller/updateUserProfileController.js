const db = require("../../db");
const jwt = require("jsonwebtoken");
exports.update = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    res.status(401).json({
      message: "No Token Provided",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const id = decoded.id
    const findUser = "SELECT * FROM users WHERE user_id = ?";	
    const [user] = await db.query(findUser, [id]);

    if(user.length === 0){
      return res.status(404).json({ message: "User not found" });
    }
    const { username, contact } = req.body;

    // Check if a new image is uploaded
    let userImage = req.file ? req.file.filename : null;

    // Retrieve current image URL from the database if no new image is provided
    if (!req.file) {
      const [user] = await db.query(
        "SELECT userImage FROM users WHERE user_id = ?",
        [id]
      );
      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      userImage = user[0].userImage; // Keep the previous image
    }

    // Validate image format if a new image is uploaded
    if (req.file) {
      const validFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!validFormats.includes(req.file.mimetype)) {
        return res.status(400).json({
          message: "Invalid image format. Only JPG and PNG are allowed.",
        });
      }
    }

    // Construct the query to update the user info
    const query = `
      UPDATE users
      SET username = ?, contact = ?, userImage = ?
      WHERE user_id = ?
    `;

    // Execute the update query with the provided details
    const result = await db.query(query, [username, contact, userImage, id]);

    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with success
    return res.status(200).json({
      message: "User updated successfully",
      data: {
        username,
        contact,
        userImage,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
