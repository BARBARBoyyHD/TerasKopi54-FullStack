const db = require("../../db")

exports.getAll = async(req,res)=>{
    try {
        const sql = "SELECT * FROM product ORDER BY product_id DESC";
        const [result] = await db.query(sql)
        if(result === 0 ){
            return res.status(404).json({
                message:"Äll item not found"
            })
        }
        else{
            return res.status(200).json({
                type:"success",
                data:result
            })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
   
}