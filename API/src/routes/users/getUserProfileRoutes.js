const express = require("express");
const Routes = express.Router();
const getUserProfileController = require("../../controller/users/getUserProfileController");

Routes.get("/api/user/profile", getUserProfileController.get);

module.exports = Routes;
