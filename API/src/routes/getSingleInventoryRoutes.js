const express =  require("express")
const Routes = express.Router()
const getSingleProductsController = require("../controller/getSingleProductsController")

Routes.get("/api/item/inventory/:id",getSingleProductsController.getSingle)

module.exports = Routes