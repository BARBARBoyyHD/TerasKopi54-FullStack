const express = require("express");
const Routes = express.Router();
const deleteInventoryController = require("../controller/deleteInventoryController");

Routes.delete("/api/delete/inventory/:id", deleteInventoryController.delete);

module.exports = Routes