const express = require("express");
const Routes = express.Router();
const addProductsController = require("../../controller/product/addProductsController");

Routes.post("/api/add/product", addProductsController.add);

module.exports = Routes;