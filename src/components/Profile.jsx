// components/Profile.jsx
import React from "react";
import "../styles/Profile.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <div className="profile-avatar">{user?.name?.charAt(0)}</div>
        <div className="profile-info">
          <h3>{user?.name}</h3>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Joined:</strong> Not Available
          </p>
          <p className="bio">Welcome to WanderPilot!</p>
          <button onClick={handleLogout} style={{ marginTop: "20px" }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
