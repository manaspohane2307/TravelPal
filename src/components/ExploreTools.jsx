import React from "react";
import "../styles/ExploreTools.css";

const tools = [
  {
    title: "Blogs",
    description: "Get expert travel tips, destination reviews, and inspiration from seasoned globetrotters."
  },
  {
    title: "Trip Planner",
    description: "Seamlessly organize your journey with AI-powered itineraries tailored to your interests and schedule."
  },
  {
    title: "Travel Guides",
    description: "Explore comprehensive guides for top destinations — from culture to cuisine to hidden gems."
  },
  {
    title: "Saved Trips",
    description: "Save your favorite plans and revisit or edit them anytime, all in one organized space."
  },
  {
    title: "Resources",
    description: "Access helpful tools like visa checkers, packing lists, and budget planners in one place."
  }
];

const ExploreTools = () => {
  return (
    <section className="explore-section">
      <h1 className="explore-main-heading">Explore Our Tools</h1>
      <p className="explore-description">
        Discover a suite of powerful features designed to simplify every step of your travel planning. 
        From brainstorming to booking — everything you need, beautifully organized in one place.
      </p>
      <div className="explore-box">
        <h2 className="explore-subheading">Everything in one space</h2>
        <div className="tools-row">
          {tools.map((tool, index) => (
            <div className="tool-card" key={index}>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreTools;


