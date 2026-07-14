const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  createExtension,
  getMyExtensions,
  getExtension,
  updateExtension,
  deleteExtension,
  downloadExtension,
} = require("../controllers/extensionController");

const {
  createExtensionValidation,
  updateExtensionValidation,
} = require("../validators/extensionValidator");

// Protect all routes
router.use(protect);

/*
|--------------------------------------------------------------------------
| CRUD Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  createExtensionValidation,
  createExtension
);

router.get("/", getMyExtensions);

router.get("/:id", getExtension);

router.put(
  "/:id",
  updateExtensionValidation,
  updateExtension
);

router.delete("/:id", deleteExtension);

/*
|--------------------------------------------------------------------------
| Download ZIP
|--------------------------------------------------------------------------
*/

router.post("/download", downloadExtension);

module.exports = router;