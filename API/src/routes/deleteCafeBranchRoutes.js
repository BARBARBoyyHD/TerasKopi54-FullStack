const express = require("express")
const Routes = express.Router()
const deleteCafeBranchController = require("../controller/deleteCafeBranchController")

Routes.delete("/api/delete/cafe/branch/:id",deleteCafeBranchController.delete)

module.exports = Routes