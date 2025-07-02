// pages/Profile.jsx
import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  const user = {
    name: "Manas Pohane",
    email: "manspohane@gmail.com",
    joined: "January 2024",
    bio: "A passionate traveler and developer building WanderPilot.",
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Joined:</strong> {user.joined}
          </p>
          <p className="bio">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
