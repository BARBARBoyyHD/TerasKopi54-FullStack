const express =  require("express")
const Routes = express.Router()
const getSingleCafeBranchController = require("../controller/getSingleCafeBranchController")

Routes.get("/api/cafe-branch/:id",getSingleCafeBranchController.getSingle)

module.exports = Routes