const express = require("express");
const Routes = express.Router();
const deleteProductsController = require("../controller/deleteProductsController");

Routes.delete("/api/delete/product/:id", deleteProductsController.delete);

module.exports = Routes