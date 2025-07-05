import React from "react";
import "../styles/HeroSection.css";
import heroImg from "../assets/heroimage.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2 className="hero-title">Discover WanderPilot</h2>
        <h1 className="hero-line">
          From Dreaming to Departing — Effortless Travel Planning Starts Here
        </h1>

        <div className="hero-image-container">
          <img src={heroImg} alt="Travel inspiration" className="hero-image" />
        </div>

        <p className="hero-subtext">
          Say goodbye to stressful planning — WanderPilot simplifies your entire
          travel experience with intelligent, personalized trip creation
          tailored to your needs. No more spreadsheets, tabs, endless research,
          or decision fatigue. From spontaneous weekend escapes to
          once-in-a-lifetime adventures, WanderPilot curates every detail to
          match your style, time, and budget — delivering seamless journeys that
          feel effortless, yet unforgettable.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
