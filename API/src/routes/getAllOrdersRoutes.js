const express =  require("express")
const Routes = express.Router()
const getAllOrdersController = require("../controller/getAllOrdersController")

Routes.get("/api/all/orders",getAllOrdersController.getAll)

module.exports = Routes