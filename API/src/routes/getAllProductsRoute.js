const express =  require("express")
const Routes = express.Router()
const getAllProductsController = require("../controller/getAllProductsController")

Routes.get("/api/all/products",getAllProductsController.getAll)

module.exports = Routes