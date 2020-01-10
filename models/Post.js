const mongoose = require("mongoose");

const Comment = require("./Comment");

const Post = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [Comment.schema]
});
