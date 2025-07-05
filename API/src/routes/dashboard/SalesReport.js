// routes.js or server.js
const express = require("express");
const router = express();
const { SalesReport } = require("../../controller/dashboard/SalesReport");

router.get("/api/salesReport", SalesReport);

module.exports = router;