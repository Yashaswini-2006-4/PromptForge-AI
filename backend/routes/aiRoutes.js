const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  generateAIExtension,
} = require("../controllers/aiController");

const {
  generateExtensionValidation,
} = require("../validators/aiValidator");

router.post(
  "/generate",
  protect,
  generateExtensionValidation,
  generateAIExtension
);

module.exports = router;