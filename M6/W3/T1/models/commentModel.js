import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: String,
  totalLikes: { type: Number, required: true },
  totalComments: { type: Number, required: true },
  comments: [mongoose.Schema.Types.ObjectId],
});

const Comment = mongoose.model(
  "example_comments",
  commentSchema
);

export default Comment;
