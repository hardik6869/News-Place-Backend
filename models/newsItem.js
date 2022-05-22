const mongoose = require("mongoose");

const newsItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Object,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsItemModel = mongoose.model("NewsItem", newsItemSchema);

module.exports = NewsItemModel;
