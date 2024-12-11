const express = require("express")
const Routes = express.Router()
const updateCafeBranchController = require("../controller/updateCafeBranchController")

Routes.put("/api/update/cafe/branch/:id",updateCafeBranchController.update)

module.exports = Routes