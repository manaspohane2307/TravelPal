import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  imageUrl: String,
  content: String,
  author: String,
  authorEmail: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
