// pages/auth/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";
import loginImage from "../../assets/login-illustration.jpg";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      toast.success("Welcome back!");
      navigate("/");
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1>Welcome back!</h1>
        <p>Login to access your travel plans, blogs, and more.</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            autoFocus
            aria-label="Email"
          />

          <label>Password</label>
          <input
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            type="password"
            required
            aria-label="Password"
          />

          <button type="submit">Login</button>
          <p className="signup-link">
            Don’t have an account?{" "}
            <Link to="/signup" className="link">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className="login-right">
        <img src={loginImage} alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
