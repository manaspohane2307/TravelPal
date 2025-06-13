import React from "react";
import "../styles/HeroSection.css";
import heroImg from "../assets/heroimage.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2 className="hero-title">Discover WanderPilot</h2>
        <h1 className="hero-line">The Smarter Way to Travel and Plan Your Trips</h1>
        <p className="hero-subtext">
        WanderPilot brings simplicity to your journeys by turning complex travel plans into seamless itineraries.
        WanderPilot curates custom itineraries just for you, blending your interests, budget, and time into the perfect travel experience.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={heroImg} alt="Travel inspiration" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;


