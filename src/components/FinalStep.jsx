import React, { useState } from "react";
import { generateItinerary } from "../api/groqClient";
import "../styles/FinalStep.css";

const FinalStep = ({ formData, prevStep }) => {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");
  const [error, setError] = useState("");

  const buildPrompt = (data) => {
    return `
  Create a detailed travel itinerary for a ${data.duration}-day trip from ${data.source} to ${data.destination} 
  (starting on ${data.startDate} and ending on ${data.endDate}). 
  
  Include:
  1. Title like: "${data.duration}-Day Trip from ${data.source} to ${data.destination} (${data.startDate} to ${data.endDate})"
  2. A short history of ${data.destination}
  3. Lodging recommendations based on budget: ${data.budget}
  4. Day-by-day itinerary:
     - Clearly label each day
     - Write 4–6 detailed activities from morning to night for each day
     - Use bullets or numbering for activities
  
  Preferences:
  - Age group: ${data.ageGroup}
  - Travel with: ${data.travelWith}
  - Travel pace: ${data.travelPace}
  - Interests: Adventure = ${data.adventureActivities}, Nightlife = ${data.nightlife}, Art & Culture = ${data.artAndCulture}, History = ${data.historyBuff}, Nature = ${data.natureLover}, Relaxation = ${data.relaxationPreference}
  - Food: Likes = ${data.foodPreferences}, Cuisine = ${data.preferredCuisines}, Dietary = ${data.dietaryRestrictions}, Street Food = ${data.streetFoodInterest}, Fine Dining = ${data.fineDiningInterest}, Must-Try = ${data.mustTryFoods}
  
  Make tone helpful and engaging. Format properly for web, no asterisks or markdown. Use numbered days and bullet activities.
    `;
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setItinerary("");

    try {
      const prompt = buildPrompt(formData);
      const response = await generateItinerary(prompt);
      setItinerary(response);
    } catch (err) {
      setError("❌ Failed to generate itinerary. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const exportToTextFile = () => {
    if (!itinerary) return;

    const blob = new Blob([itinerary], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "itinerary.txt";
    link.click();
  };

  const renderFormattedItinerary = (raw) => {
    const lines = raw
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .split("\n")
      .filter((line) => line.trim() !== "");

    const formatted = [];
    let inList = false;
    let currentList = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Detect Title heading like: 8-Day Trip from Mumbai to Japan (July 1 to July 8)
      if (/^\d+-Day Trip from .* to .*/i.test(trimmed)) {
        if (inList) {
          formatted.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = [];
          inList = false;
        }
        const titleWithoutDates = trimmed.replace(/\s*\(.*?\)/, "").trim();
        formatted.push(
          <h1 className="itinerary-main-title" key={index}>
            {titleWithoutDates}
          </h1>
        );
      }

      // Detect Day heading
      else if (/^Day\s\d+:/i.test(trimmed)) {
        if (inList) {
          formatted.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = [];
          inList = false;
        }
        formatted.push(
          <p className="itinerary-heading" key={index}>
            <strong>{trimmed}</strong>
          </p>
        );
      }

      // Recommended Lodging
      else if (/^Recommended Lodging:/i.test(trimmed)) {
        if (inList) {
          formatted.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = [];
          inList = false;
        }
        formatted.push(
          <h4 className="itinerary-subheading" key={index}>
            <strong>{trimmed}</strong>
          </h4>
        );
      }

      // Other Subheadings
      else if (/^(About|Lodging|Itinerary|Title)/i.test(trimmed)) {
        if (inList) {
          formatted.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = [];
          inList = false;
        }
        formatted.push(
          <h4 className="itinerary-subheading" key={index}>
            {trimmed}
          </h4>
        );
      }

      // Bullet line
      else if (/^[\-•]/.test(trimmed)) {
        inList = true;
        currentList.push(
          <li key={index} className="itinerary-line">
            {trimmed.replace(/^[-•]\s*/, "")}
          </li>
        );
      }

      // Paragraph
      else {
        if (inList) {
          formatted.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = [];
          inList = false;
        }
        formatted.push(
          <p key={index} className="itinerary-line">
            {trimmed}
          </p>
        );
      }
    });

    if (inList && currentList.length > 0) {
      formatted.push(<ul key={`list-end`}>{currentList}</ul>);
    }

    return formatted;
  };

  return (
    <div className="final-step-container">
      <h2 className="final-step-title">🧭 Your AI-Powered Itinerary</h2>

      {error && <p className="error-text">{error}</p>}

      {itinerary && (
        <div className="itinerary-output">
          {renderFormattedItinerary(itinerary)}
        </div>
      )}

      <div className="button-row">
        <button
          className="primary-button"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>
        <button
          className="primary-button"
          onClick={exportToTextFile}
          disabled={!itinerary}
        >
          Export Itinerary
        </button>
        <button className="secondary-button" onClick={prevStep}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default FinalStep;
