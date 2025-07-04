import express from "express";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// 📝 Register
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id); // ✅ fixed

    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// 🔐 Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id); // ✅ fixed

    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

export default router;
