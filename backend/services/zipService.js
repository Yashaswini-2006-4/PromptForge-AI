const JSZip = require("jszip");

async function createExtensionZip(extension) {
  const zip = new JSZip();

  if (!extension.files || !Array.isArray(extension.files)) {
    throw new Error("No files found to zip.");
  }

  extension.files.forEach((file) => {
    zip.file(file.name, file.content);
  });

  return await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9,
    },
  });
}

module.exports = {
  createExtensionZip,
};