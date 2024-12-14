const express =require("express")
const Routes = express.Router()
const userUpdate = require("../controller/updateUserProfileController")

Routes.put("/api/user/profile/update",userUpdate.update)

module.exports = Routes