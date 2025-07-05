const express = require("express");
const Routes = express.Router();
const getAllLogsController = require("../../controller/logs/GetAllLogs");

Routes.get("/api/logs", getAllLogsController.getAllLogs);

module.exports = Routes;
