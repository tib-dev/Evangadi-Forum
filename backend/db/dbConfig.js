require("dotenv").config();
const mysql = require("mysql2");
// create the connection to the database

const dbConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  connectionLimit: 10,
});

// connect to the database

dbConnection.connect((err) => {
  // if (err) throw err;
  console.log("Connected to the database!");
});

module.exports = dbConnection;
