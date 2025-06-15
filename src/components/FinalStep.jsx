import React, { useState } from "react";
import { generateItinerary } from "../api/groqClient"; // ✅ Switched from gemini to groq
import "../styles/StepOne.css"; // ✅ Reuse existing styling

const FinalStep = ({ formData, prevStep }) => {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");
  const [error, setError] = useState("");

  const buildPrompt = (data) => {
    return `
Generate a personalized travel itinerary for ${
      data.duration || "a"
    } day(s) in ${data.destination}, starting from ${data.startDate} to ${
      data.endDate
    }.

Include the following sections:
1. Title: "${data.duration}-Day Trip in ${data.destination}, UAE (${
      data.startDate
    } to ${data.endDate})"
2. A short description and history of ${data.destination}.
3. Lodging recommendations based on: ${data.accommodationPreference || "Any"}.
4. Day-by-day itinerary (Day 1 to Day ${data.duration}):
   - Each day should list morning to night activities as bullet points.
   - Activities should reflect:
     - Travel pace: ${data.travelPace}
     - Food preference: ${data.foodPreference}
     - Interests: ${data.culturalExperience}, ${data.nightlife}, ${
      data.shoppingTime
    }, ${data.adventureActivities}
     - Traveler group: ${data.travelGroup}
     - Age group: ${data.ageGroup}

Make the tone friendly and clear.`;
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

  return (
    <div className="step-one-page">
      <h2>Generating Your Personalized Itinerary</h2>

      <div className="form-row">
        <button
          className="next-button"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>
        <button className="next-button" onClick={prevStep}>
          Back
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
          {error}
        </p>
      )}

      {itinerary && (
        <div className="form-group" style={{ marginTop: "40px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            🧭 Your Itinerary
          </h3>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              lineHeight: "1.6",
            }}
          >
            {itinerary}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FinalStep;
