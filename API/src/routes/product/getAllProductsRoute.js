const express =  require("express")
const Routes = express.Router()
const getAllProductsController = require("../../controller/product/getAllProductsController")

Routes.get("/api/all/products",getAllProductsController.getAll)

module.exports = Routes