import React from "react";
import "../styles/HowItWorks.css";

const steps = [
  "Enter Trip Details",
  "AI Analyzes Preferences and generates itinerary",
  "Customize & Edit",
  "Save or Share Your Plan",
  "Generate Quotations",
  "Explore travel packages"
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h1 className="how-heading">How TravelPal Works</h1>
      <div className="how-box">
        <div className="how-text">
          <h2 className="sub-heading">Plan Smarter With TravlePal</h2>
          <p className="how-paragraph">
            TravelPal revolutionizes trip planning by combining user input with intelligent AI processing.
            Just tell us about your dream trip, and we’ll build an optimized day-by-day itinerary for you.
            Customize it as you go and enjoy seamless travel planning with just a few clicks.
          </p>
        </div>

        <div className="how-steps-container">
          {steps.map((step, index) => (
            <div className="how-step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-text">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
