import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <h1>WanderPilot</h1>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <Link to="/blogs">Travel Blog</Link>
        <Link to="/trip-planner">Trip Planner</Link>
        <Link to="/travel-guides">Travel Guides</Link>
        <Link to="/my-blogs">My Blogs</Link>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <Link to="/profile" className="user-email">
          manspohane@gmail.com
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

