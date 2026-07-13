const Extension = require("../models/Extension");

const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalExtensions = await Extension.countDocuments({
      owner: userId,
    });

    const totalPublished = await Extension.countDocuments({
      owner: userId,
      published: true,
    });

    const extensions = await Extension.find({
      owner: userId,
    });

    const totalDownloads = extensions.reduce(
      (sum, ext) => sum + ext.downloads,
      0
    );

    res.json({
      success: true,
      stats: {
        extensions: totalExtensions,
        aiGenerations: totalExtensions,
        published: totalPublished,
        downloads: totalDownloads,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};