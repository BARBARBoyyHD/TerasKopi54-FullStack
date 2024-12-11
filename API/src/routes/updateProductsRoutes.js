const express = require("express");
const Routes = express.Router();
const updateProductsController = require("../controller/updateProductsController");

Routes.put("/api/update/products/:id", updateProductsController.update);

module.exports = Routes