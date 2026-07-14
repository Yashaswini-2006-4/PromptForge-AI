const { body } = require("express-validator");

const generateExtensionValidation = [
  body("prompt")
    .trim()
    .notEmpty()
    .withMessage("Prompt is required.")
    .isLength({ min: 10 })
    .withMessage("Prompt must be at least 10 characters.")
    .isLength({ max: 5000 })
    .withMessage("Prompt is too long."),
];

module.exports = {
  generateExtensionValidation,
};