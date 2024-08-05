const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
// create the connection to the database
const dbConnection = require("./db/dbConfig");

// Middleware to parse JSON request bodies
app.use(express.json());

// middleware body parsing middleware
app.use(bodyParser.json());

// Enable CORS for cross-origin requests
app.use(cors());

// User routes middleware file
const userRoutes = require("./routes/userRoute");

app.use("/api/users", userRoutes);

// Question routes middleware file
const questionRoutes = require("./routes/questionRoute");

app.use("/api/questions", questionRoutes);

// Answer routes middleware file

const answerRoutes = require("./routes/answerRoute");

app.use("/api/answers", answerRoutes);

// Upvote routes middleware file

// Start the server and check the database connection
const start = async () => {
  try {
    const result = await dbConnection.execute("select 'test'");
    console.log("Connected to the database!");

    await app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
