const express =require("express")
const Routes = express.Router()
const cartController = require("../controller/gerCartController")

Routes.get("/api/cart/item" ,cartController.get)

module.exports = Routes