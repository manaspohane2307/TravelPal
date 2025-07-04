// components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Left: Brand */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <h1>WanderPilot</h1>
        </Link>
      </div>

      {/* Center: Main Nav */}
      <div className="navbar-center">
        <Link to="/blogs">Travel Blog</Link>
        <Link to="/trip-planner">Trip Planner</Link>
        <Link to="/travel-guides">Travel Guides</Link>
        <Link to="/my-blogs">My Blogs</Link>
      </div>

      {/* Right: Auth options */}
      <div className="navbar-right">
        {user ? (
          <>
            <Link to="/profile" className="user-email">
              {user.email}
            </Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="user-email">
              Sign Up
            </Link>
            <span style={{ margin: "0 5px" }}>|</span>
            <Link to="/login" className="user-email">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
