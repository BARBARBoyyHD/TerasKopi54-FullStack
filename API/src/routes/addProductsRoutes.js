const express = require("express");
const Routes = express.Router();
const addProductsController = require("../controller/addProductsController");

Routes.post("/api/add/product", addProductsController.add);

module.exports = Routes;