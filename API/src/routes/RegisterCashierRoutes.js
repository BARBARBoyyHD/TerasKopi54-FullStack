const express = require("express")
const Routes = express.Router()
const RegisterCashierController = require("../controller/RegisterCashierController")

Routes.post("/api/register/users", RegisterCashierController.register)

module.exports = Routes