const express = require("express");
const router = express.Router();
const { getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, loginUser);
router.get("/me", protect, getMe);

module.exports = router;