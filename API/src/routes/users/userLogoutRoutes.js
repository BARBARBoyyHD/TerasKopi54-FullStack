const express = require("express")
const Routes = express.Router()
const userLogoutController = require("../../controller/users/userLogoutController")

Routes.get("/api/user/logout",userLogoutController.logout)

module.exports = Routes