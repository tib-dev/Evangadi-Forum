const mysql = require("mysql2");

const dbconnection = mysql.createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
});

console.log(dbconnection.user);

module.exports = dbconnection.promise();
