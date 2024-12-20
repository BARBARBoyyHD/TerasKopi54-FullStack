const db = require("../../db")

const validateRole = (role)=>{
    return(req,res,next)=>{
        const userRole = req.cookies["Role"]
        if(role.includes(userRole)){
            next()
        }
        else{
            return res.status(401).json({
                message:"you dont have permission"
            })
        }
    }
}
module.exports = validateRole