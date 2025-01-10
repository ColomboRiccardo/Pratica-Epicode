import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  author: { type: String, required: true },
  profileImg: String,
});

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: String,
  img: String,
  totalLikes: { type: Number, required: true },
  totalComments: { type: Number, required: true },
  likes: [likeSchema],
  comments: [mongoose.Schema.Types.ObjectId],
});

const Post = mongoose.model("example_posts", postSchema);

export default Post;
