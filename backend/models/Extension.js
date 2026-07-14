const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

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

    version: {
      type: String,
      default: "1.0.0",
    },

    files: {
      type: [fileSchema],
      default: [],
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

    tags: {
      type: [String],
      default: [],
    },

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