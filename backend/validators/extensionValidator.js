const { body } = require("express-validator");

const createExtensionValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 80 })
    .withMessage("Title must be between 3 and 80 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description is too long"),

  body("prompt")
    .trim()
    .notEmpty()
    .withMessage("Prompt is required")
    .isLength({ min: 10 })
    .withMessage("Prompt must be at least 10 characters"),
];

const updateExtensionValidation = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 80 }),

  body("description")
    .optional()
    .isLength({ max: 500 }),

  body("prompt")
    .optional()
    .isLength({ min: 10 }),

  body("status")
    .optional()
    .isIn(["draft", "published"]),

  body("visibility")
    .optional()
    .isIn(["private", "public"]),
];

module.exports = {
  createExtensionValidation,
  updateExtensionValidation,
};