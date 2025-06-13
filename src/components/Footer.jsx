import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="footer-title">WanderPilot</h2>
          <p className="footer-subtext">The smarter way to travel</p>
        </div>

        {/* Right Side - Columns */}
        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="footer-heading">Explore</h4>
            <ul>
              <li>Blog</li>
              <li>Trip Planner</li>
              <li>Travel Guides</li>
              <li>Saved Trips</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Travel Blog</li>
              <li>Partnerships</li>
              <li>Press & Media</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Useful Links</h4>
            <ul>
              <li>My Account</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
