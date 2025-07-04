// pages/auth/Signup.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Signup.css";
import signupImage from "../../assets/signup-illustration.jpg";
import { toast } from "react-toastify";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form.name, form.email, form.password);
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <h1>Ready to start your next adventure?</h1>
        <p>
          Join WanderPilot and begin planning your dream trips effortlessly —
          discover, organize, and explore like never before!
        </p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            autoFocus
            aria-label="Full Name"
          />

          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            aria-label="Email"
          />

          <label>Password</label>
          <input
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            type="password"
            required
            aria-label="Password"
          />

          <div className="agree">
            <input type="checkbox" required />
            <span>
              I agree to the <a href="/terms">Terms & Conditions</a>
            </span>
          </div>

          <button type="submit">Sign Up</button>
          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="signup-right">
        <img src={signupImage} alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default Signup;
