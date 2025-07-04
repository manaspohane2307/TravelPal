import { Schema, model } from "mongoose";
import slugify from "slugify";

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    imageUrl: String,
    musicUrl: String,
    slug: { type: String, unique: true }, // keep slug and make it unique
    likes: { type: Number, default: 0 },
    bookmarkedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

// Auto-generate slug before saving
blogSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export default model("Blog", blogSchema);
