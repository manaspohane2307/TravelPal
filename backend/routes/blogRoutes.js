import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Blog from "../models/Blog.js";

const router = express.Router();

// Setup multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "uploads/";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// POST blog with image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    const blog = new Blog({
      ...req.body,
      imageUrl,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.error("Error uploading blog:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
