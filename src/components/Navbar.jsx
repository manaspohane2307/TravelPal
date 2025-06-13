import React from "react";
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
        <a href="#">Blog</a>
        <a href="#">Trip Planner</a>
        <a href="#">Travel Guides</a>
        <a href="#">Saved Trips</a>
        <a href="#">Resources</a>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <span className="user-email">Guest</span>
      </div>
    </nav>
  );
};

export default Navbar;
