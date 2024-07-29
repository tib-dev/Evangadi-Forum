const mysql = require("mysql2");

// Create a new MySQL connection

const dbconnection = mysql.createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  connectionLimit: 10,
});
console.log(dbconnection.user);

module.exports = dbconnection.promise();
