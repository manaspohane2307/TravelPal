import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import blogsRouter from "./routes/blogRoutes.js";
import authRoutes from "./routes/auth.js"; // ✅ NEW
import { protect } from "./middleware/authMiddleware.js"; // ✅ NEW

// Setup __dirname
const __filename = fileURLToPath(import.meta.url);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Load .env
dotenv.config();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🟢 MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file serving
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes); // ✅ Auth
app.use("/api/blogs", blogsRouter); // ✅ Blog (now protected)

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
