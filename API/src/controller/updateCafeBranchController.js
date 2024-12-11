const db = require("../../db");

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { branch_name, address_branch, contact } = req.body;

    const sql =
      "UPDATE cafe_branch SET branch_name = ?, address_branch = ?, contact = ? WHERE id_branch = ?";

    const[result] = await db.query(sql,[id,branch_name,address_branch,contact])
    if(result.affectedRows > 0){
        return res.status(200).json({
            message:"cafe branch updated"
        })
    }
    else{
        return res.status(404).json({
            message:"failed to update"
        })
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
