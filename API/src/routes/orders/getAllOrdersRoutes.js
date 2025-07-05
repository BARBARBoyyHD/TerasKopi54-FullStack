const express =  require("express")
const Routes = express.Router()
const getAllOrdersController = require("../../controller/orders/getAllOrdersController")

Routes.get("/api/all/orders",getAllOrdersController.getAll)

module.exports = Routes