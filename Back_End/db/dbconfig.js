const mysql2 = require("mysql2");
require("dotenv").config();
const dbconnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
});

module.exports = dbconnection.promise();
