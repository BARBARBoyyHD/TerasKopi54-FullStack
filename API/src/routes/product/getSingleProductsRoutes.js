const express =  require("express")
const Routes = express.Router()
const getSingleProductsController = require("../../controller/product/getSingleProductsController")

Routes.get("/api/products/:id",getSingleProductsController.getSingle)

module.exports = Routes