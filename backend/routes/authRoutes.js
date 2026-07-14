const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/register",
  registerValidation,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  loginUser
);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/me",
  protect,
  getMe
);

router.put(
  "/profile",
  protect,
  updateProfile
);

module.exports = router;