import React from "react";
import "../styles/TellUsYourPlans.css";
import tellImg from "../assets/tellusyourplans.jpg";

const TellUsYourPlans = () => {
  return (
    <section className="tell-section">
      <h1 className="section-title">Everything you need for planning your trip</h1>
      <div className="tell-box">
        <div className="tell-text">
          <h2 className="tell-heading">Tell Us Your Plans</h2>
          <p>
            Whether you’re dreaming of sandy beaches, mountain adventures, or cultural escapes,
            WanderPilot helps you plan your journey effortlessly.
            <br /><br />
            Just tell us where you want to go, when, and what you love — our AI will take care
            of the rest, crafting personalized day-by-day itineraries tailored to your preferences.
          </p>
        </div>
        <div className="tell-image-container">
          <img src={tellImg} alt="Plan interface" className="tell-image" />
        </div>
      </div>
    </section>
  );
};

export default TellUsYourPlans;




