const mongoose = require("mongoose");

const extensionSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    prompt: {
      type: String,
      required: true,
    },

    generatedCode: {
      type: Object,
      default: {},
    },

    published: {
      type: Boolean,
      default: false,
    },

    downloads: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Extension", extensionSchema);