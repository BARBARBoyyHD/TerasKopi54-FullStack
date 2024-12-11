const db = require("../../db")

exports.getAll = async (req,res)=>{
    try {
        const sql = "SELECT * FROM cafe_branch";
        const [result] = await db.query(sql)
        if(result.length === 0 ){
            return res.status(404).json({
                message:" All cafe branch not found"
            })
        }
        else{
            return res.status(200).json({
                type:"success",
                data:result
            })
        }

    } catch (error) {
        console.log(err);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
   


}