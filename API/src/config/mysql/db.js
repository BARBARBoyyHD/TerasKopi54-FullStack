require("dotenv").config()
const { createPool } = require("mysql2/promise");

const db = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database:"myterask_db"
});


module.exports = db;