const express =  require("express")
const Routes = express.Router()
const getAllCafeBranchController = require("../controller/getAllCafeBranchController")

Routes.get("/api/cafe-branch",getAllCafeBranchController.getAll)

module.exports = Routes