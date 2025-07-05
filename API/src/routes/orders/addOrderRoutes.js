const express = require("express")
const Routes = express.Router()
const addOrderController = require("../../controller/orders/addOrderController")

Routes.post("/api/add/order",addOrderController.add)

module.exports = Routes