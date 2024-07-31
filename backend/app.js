require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbconnection = require("./db/dbConfig");
// Connect to the MySQL database
app.use(express.json());

// Enable CORS for cross-origin requests
app.use(cors());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, Evangadi Forum!");
});

const start = async () => {
  try {
    // Correct the SQL query syntax
    await dbconnection.execute('SELECT "Connected"');
    console.log("Connection has been established successfully.");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit the process if the database connection fails
  }
};
