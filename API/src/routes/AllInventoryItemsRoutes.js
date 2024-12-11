const express = require("express")
const Routes = express.Router()
const AllInventoryItemsController = require("../controller/AllInventoryItemsController")

Routes.get("/api/all/item/inventory", AllInventoryItemsController.getAll)

module.exports = Routes