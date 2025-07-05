const express =  require("express")
const Routes = express.Router()
const getSingleInventoryController = require("../../controller/inventory/getSingleInventoryController")

Routes.get("/api/item/inventory/:id",getSingleInventoryController.getSingle)

module.exports = Routes