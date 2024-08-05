const express = require("express");
const router = express.Router();
//auth middleware
const authMiddleware = require("../middleware/authMiddleware");
const { StatusCodes } = require("http-status-codes");

// question  routes
router.get("/all-question", authMiddleware, (req, res) => {
  res.sendStatus(StatusCodes.OK).json({ msg: "All questions" });
});
module.exports = router;
