const mongoose = require("mongoose");

const extensionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    prompt: {
      type: String,
      required: true,
    },

    generatedCode: {
      type: String,
      default: "",
    },

    manifestJson: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },

    version: {
      type: String,
      default: "1.0.0",
    },

    tags: [
      {
        type: String,
      },
    ],

    downloads: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Extension", extensionSchema);