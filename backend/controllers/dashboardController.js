const Extension = require("../models/Extension");

const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalExtensions = await Extension.countDocuments({
      owner: userId,
    });

    const totalPublished = await Extension.countDocuments({
      owner: userId,
      status: "published",
    });

    const extensions = await Extension.find({
      owner: userId,
    });

    const totalDownloads = extensions.reduce(
      (sum, extension) => sum + (extension.downloads || 0),
      0
    );

    res.status(200).json({
      success: true,
      stats: {
        extensions: totalExtensions,
        aiGenerations: totalExtensions,
        downloads: totalDownloads,
        published: totalPublished,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};