const express =require("express")
const Routes = express.Router()
const addToCartController = require("../../controller/orders/addToCartController")

Routes.post("/api/add/to/cart",addToCartController.add)

module.exports = Routes