const db = require("../../db");

exports.add = async (req, res) => {
  try {
    const { branch_name, address_branch, contact } = req.body;
    const sql =
      "INSERT INTO cafe_branch(branch_name,address_branch,contact) VALUES(?,?,?)";

    const [result] = await db.query(sql, [
      branch_name,
      address_branch,
      contact,
    ]);
    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: "Cafe Branch Added",
      });
    } else {
      return res.status(404).json({
        message: "Cafe Branch Not Added",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
