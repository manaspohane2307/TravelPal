import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <h1 className="navbar-logo">WanderPilot</h1>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <Link to="#">Blog</Link>
        <Link to="/trip-planner">Trip Planner</Link>
        <Link to="/travel-guides">Travel Guides</Link>
        <Link to="#">Saved Trips</Link>
        <Link to="#">Resources</Link>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <span className="user-email">manspohane@gmail.com</span>
      </div>
    </nav>
  );
};

export default Navbar;

