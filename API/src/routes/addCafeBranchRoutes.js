const express = require("express");
const Routes = express.Router();
const addCafeBranchController = require("../controller/addCafeBranchController");

Routes.post("/api/add/cafe/branch", addCafeBranchController.add);

module.exports = Routes;