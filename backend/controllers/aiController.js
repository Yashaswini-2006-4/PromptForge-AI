const { validationResult } = require("express-validator");
const { generateExtension } = require("../services/geminiService");
const Extension = require("../models/Extension");

const generateAIExtension = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { prompt } = req.body;

    const aiResult = await generateExtension(prompt);

    const extension = await Extension.create({
      title: aiResult.title,
      description: aiResult.description,
      prompt,
      generatedCode: JSON.stringify(aiResult.files),
      manifestJson:
        aiResult.files.find(
          (file) => file.name === "manifest.json"
        )?.content || "",
      owner: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Extension generated successfully.",
      extension,
      files: aiResult.files,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateAIExtension,
};