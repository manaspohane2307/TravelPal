import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PlanPage.css";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const PlanPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan || "No plan found";
  const destinationName = location.state?.destination || "Your Destination";

  const handleExport = () => {
    const element = document.createElement("a");
    const file = new Blob([plan], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "My_Trip_Plan.txt";
    document.body.appendChild(element);
    element.click();
  };

  const mapMatch = plan.match(
    /\[Google Maps Link:\s*(https:\/\/www\.google\.com\/maps\/[^\]]+)\]/i
  );
  const rawMapURL = mapMatch ? mapMatch[1] : null;
  const coordMatch = rawMapURL?.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  const lat = coordMatch?.[1];
  const lng = coordMatch?.[2];

  const embedSrc =
    lat && lng
      ? `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${lat},${lng}&zoom=13`
      : null;

  const cleanedPlan = plan
    .replace(/#/g, "")
    .replace(/Day\s+(\d+):.*$/gm, "Day $1")
    .replace(/\*\*(Day \d+)/g, "$1")
    .replace(/2\.\s*Google Maps Embed Link:.*\n?\(.*\)\n?/gi, "")
    .replace(
      /\[?Google Maps.*?\]?\s*\(https:\/\/www\.google\.com\/maps\/[^\)]+\)\n?/gi,
      ""
    )
    .replace(/^\s*\n/gm, "")
    .trim();

  return (
    <div className="plan-page-container">
      <div className="plan-page-header">
        <h1 className="plan-title">✈️ Your Trip Plan to {destinationName}</h1>
        <p className="plan-subtitle">
          Dive into your custom travel experience — everything you need in one
          place.
        </p>
      </div>

      {embedSrc && (
        <div className="map-container">
          <iframe
            src={embedSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Trip Map"
          ></iframe>
        </div>
      )}

      <div className="plan-content-box">
        {cleanedPlan.split("\n").map((line, index) => {
          const trimmed = line.trim();

          if (/^Day \d+$/i.test(trimmed)) {
            return (
              <p key={index} className="day-heading">
                {trimmed}
              </p>
            );
          }

          if (
            /^(Morning|Afternoon|Evening|Travel Tips|Final Notes|Suggested Stay|Destination Overview)/i.test(
              trimmed
            )
          ) {
            return (
              <p key={index} className="subheading">
                {trimmed}
              </p>
            );
          }

          return (
            <p key={index} className="plan-text">
              {trimmed}
            </p>
          );
        })}
      </div>

      <div className="plan-buttons-bottom">
        <button onClick={() => navigate("/trip-planner")}>← Back</button>
        <button onClick={handleExport}>Export Plan ⬇</button>
      </div>

      <div className="plan-followup-section">
        <p className="followup-text">
          ✅ Satisfied with your plan? You can now get a personalized quotation
          based on your preferences.
        </p>
        <div className="followup-buttons">
          <button onClick={() => navigate("/trip-planner")}>
            ✏️ Edit Plan
          </button>
          <button onClick={() => alert("PDF export coming soon!")}>
            🧾 Export to PDF
          </button>
          <div className="quotation-highlight">
            <h2 className="quotation-heading">🎯 Ready for the Next Step?</h2>
            <p className="quotation-msg">
              <strong>Satisfied with your plan?</strong>
              <br />
              Let us generate a <strong>personalized quotation</strong>{" "}
              including estimated costs for stay, travel, and experiences in{" "}
              <strong>{destinationName}</strong>.
            </p>
            <button
              className="quotation-button"
              onClick={() =>
                navigate("/quotation", {
                  state: { destination: destinationName, plan },
                })
              }
            >
              💰 Generate Quotation Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
