const express = require("express");
const router = express.Router();

//User controller
const { register, login, checkUser } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", register);

// Login routes
router.post("/login", login);

// Check user routes
router.get("/check", authMiddleware, checkUser);
module.exports = router;
