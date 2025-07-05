const express = require("express");
const Routes = express.Router();
const loginCashierController = require("../../controller/users/loginCashierController");

Routes.post("/api/login/users", loginCashierController.login);

module.exports = Routes;
