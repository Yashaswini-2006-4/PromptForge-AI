const Extension = require("../models/Extension");
const { validationResult } = require("express-validator");
const { createExtensionZip } = require("../services/zipService");

/*
|--------------------------------------------------------------------------
| Create Extension
|--------------------------------------------------------------------------
*/

const createExtension = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const extension = await Extension.create({
      ...req.body,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Extension created successfully",
      extension,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get My Extensions
|--------------------------------------------------------------------------
*/

const getMyExtensions = async (req, res) => {
  try {
    const extensions = await Extension.find({
      owner: req.user._id,
    }).sort({
      updatedAt: -1,
    });

    res.status(200).json({
      success: true,
      count: extensions.length,
      extensions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Extension
|--------------------------------------------------------------------------
*/

const getExtension = async (req, res) => {
  try {
    const extension = await Extension.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!extension) {
      return res.status(404).json({
        success: false,
        message: "Extension not found",
      });
    }

    res.status(200).json({
      success: true,
      extension,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Update Extension
|--------------------------------------------------------------------------
*/

const updateExtension = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const extension = await Extension.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user._id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!extension) {
      return res.status(404).json({
        success: false,
        message: "Extension not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Extension updated successfully",
      extension,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Delete Extension
|--------------------------------------------------------------------------
*/

const deleteExtension = async (req, res) => {
  try {
    const extension = await Extension.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!extension) {
      return res.status(404).json({
        success: false,
        message: "Extension not found",
      });
    }

    await extension.deleteOne();

    res.status(200).json({
      success: true,
      message: "Extension deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Download Extension ZIP
|--------------------------------------------------------------------------
*/

const downloadExtension = async (req, res) => {
  try {
    const extension = req.body;

    if (!extension || !extension.files || extension.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No extension files provided.",
      });
    }

    const zipBuffer = await createExtensionZip(extension);

    const fileName =
      (extension.title || "PromptForge-Extension")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-") + ".zip";

    res.set({
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": zipBuffer.length,
    });

    return res.send(zipBuffer);
  } catch (error) {
    console.error("ZIP Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate ZIP.",
    });
  }
};

module.exports = {
  createExtension,
  getMyExtensions,
  getExtension,
  updateExtension,
  deleteExtension,
  downloadExtension,
};