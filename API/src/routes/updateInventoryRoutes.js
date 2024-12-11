const express = require("express")
const Routes = express.Router()
const updateInventoryController = require("../controller/updateInventoryController")

Routes.put("/api/update/inventory/:id",updateInventoryController.update)

module.exports = Routes