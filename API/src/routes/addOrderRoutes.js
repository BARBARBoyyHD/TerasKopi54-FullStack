const express = require("express")
const Routes = express.Router()
const addOrderController = require("../controller/addOrderController")

Routes.post("/api/add/order",addOrderController.add)

module.exports = Routes