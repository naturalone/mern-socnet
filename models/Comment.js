const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  replies: [this]
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
