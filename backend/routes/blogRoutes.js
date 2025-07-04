import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import Blog from "../models/Blog.js";
import { protect } from "../middleware/authMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// 📦 Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder =
      file.fieldname === "image"
        ? path.join(__dirname, "../uploads/images")
        : path.join(__dirname, "../uploads/music");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ===============================
   📥 GET blogs by current user
================================== */
router.get("/user", protect, async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

/* ===============================
   📝 POST create new blog
================================== */
router.post(
  "/",
  protect,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "music", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { title, content } = req.body;

      const blog = new Blog({
        title,
        content,
        author: req.user._id,
        imageUrl: req.files?.image?.[0]?.filename || null,
        musicUrl: req.files?.music?.[0]?.filename || null,
      });

      await blog.save();
      res.status(201).json(blog);
    } catch (err) {
      console.error("❌ Blog creation failed:", err.message);
      res.status(500).json({ error: "Failed to create blog" });
    }
  }
);

/* ===============================
   ✏️ PUT update blog
================================== */
router.put(
  "/:id",
  protect,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "music", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const update = {
        title: req.body.title,
        content: req.body.content,
      };

      if (req.files?.image) update.imageUrl = req.files.image[0].filename;
      if (req.files?.music) update.musicUrl = req.files.music[0].filename;

      const blog = await Blog.findByIdAndUpdate(req.params.id, update, {
        new: true,
      });

      res.json(blog);
    } catch (err) {
      res.status(500).json({ error: "Failed to update blog" });
    }
  }
);

/* ===============================
   🗑️ DELETE blog
================================== */
router.delete("/:id", protect, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

/* ===============================
   ❤️ POST like a blog
================================== */
router.post("/like/:id", protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    blog.likes = (blog.likes || 0) + 1;
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to like blog" });
  }
});

/* ===============================
   🔖 POST bookmark toggle
================================== */
router.post("/bookmark/:id", protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    const uid = req.user._id.toString();
    const index = blog.bookmarkedBy.findIndex((u) => u.toString() === uid);

    if (index >= 0) {
      blog.bookmarkedBy.splice(index, 1);
    } else {
      blog.bookmarkedBy.push(uid);
    }

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to bookmark blog" });
  }
});

export default router;
