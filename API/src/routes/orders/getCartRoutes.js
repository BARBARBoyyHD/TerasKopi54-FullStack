const express =require("express")
const Routes = express.Router()
const cartController = require("../../controller/orders/getCartController")

Routes.get("/api/cart/item" ,cartController.get)

module.exports = Routes