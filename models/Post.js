const mongoose = require("mongoose");

const Comment = require("./Comment");

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  content: [
    {
      content_type: String,
      value: String
    }
  ],
  title: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [Comment.schema]
});

module.exports = Post = mongoose.model("post", PostSchema);
