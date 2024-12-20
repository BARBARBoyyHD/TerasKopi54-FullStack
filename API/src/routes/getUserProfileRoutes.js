const express =require("express")
const Routes = express.Router()
const getUserProfileController = require("../controller/getUserProfileController")

Routes.get("/api/user/profile",getUserProfileController.get)

module.exports = Routes