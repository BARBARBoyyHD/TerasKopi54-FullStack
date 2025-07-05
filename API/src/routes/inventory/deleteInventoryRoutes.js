const express = require("express");
const Routes = express.Router();
const deleteInventoryController = require("../../controller/inventory/deleteInventoryController");

Routes.delete("/api/delete/inventory/:id", deleteInventoryController.delete);

module.exports = Routes