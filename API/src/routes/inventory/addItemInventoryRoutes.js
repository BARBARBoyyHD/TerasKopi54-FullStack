const express = require("express")
const Routes = express.Router()
const addItemInventoryController = require("../../controller/inventory/addItemInventory")

Routes.post("/api/add/item/inventory",addItemInventoryController.addItem)

module.exports = Routes