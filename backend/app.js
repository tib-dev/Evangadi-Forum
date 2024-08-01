require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/dbConfig");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Evangadi Forum!");
});

// Connect to the MySQL database
const start = async () => {
  try {
    await dbConnection.execute('SELECT "Connected"');
    console.log("Connection has been established successfully.");

    app.listen(port, (err) => {
      if (err) {
        console.error("Server failed to start:", err);
        process.exit(1);
      }
      console.log(`Server is running on port ${port}`);
    });

    // Log environment variables for debugging
    console.log(`DB_USER: ${process.env.DB_USER}`);
    console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
    console.log(`DB_NAME: ${process.env.DB_NAME}`);
    console.log(`DB_HOST: ${process.env.DB_HOST}`);
    console.log(`PORT: ${process.env.PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

start();
