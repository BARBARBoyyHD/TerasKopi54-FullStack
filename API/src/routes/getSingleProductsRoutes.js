const express =  require("express")
const Routes = express.Router()
const getSingleProductsController = require("../controller/getSingleProductsController")

Routes.get("/api/products/:id",getSingleProductsController.getSingle)

module.exports = Routes