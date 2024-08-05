require("dotenv").config();
const mysql = require("mysql2");
// create the connection to the database

const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

// connect to the database

// dbConnection.execute(() => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("Connected to the database!");
// });

module.exports = dbConnection.promise();
