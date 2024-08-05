const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined in the environment variables.");
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal server error" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;

    req.user = { username, userId };
    next();
  } catch (err) {
    console.error("Authentication error:", err);

    if (err.name === "TokenExpiredError") {
      console.error("Token expired at:", err.expiredAt);
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Unauthorized: Token has expired" });
    }

    if (err.name === "JsonWebTokenError") {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Unauthorized: Invalid token" });
    }

    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = authMiddleware;