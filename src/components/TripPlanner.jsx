import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TripPlanner.css";
import { buildItineraryPrompt } from "../utils/promptBuilder";
import { generateItinerary } from "../api/groqClient";

const TripPlanner = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGenerate = async () => {
    setLoading(true);

    const prompt = buildItineraryPrompt(formData);
    const result = await generateItinerary(prompt);
    setLoading(false);

    navigate("/plan", {
      state: {
        plan: result,
        destination: formData.destination,
      },
    });
  };
  

  return (
    <div className="trip-planner-wrapper">
      <h1 className="trip-planner-heading">
        🌐 Let’s Craft Your Perfect Travel Experience
      </h1>
      <p className="trip-planner-subheading">
        Tell us your trip preferences and we’ll plan a perfect experience that
        fits your style and time.
      </p>

      <div className="form-card">
        {/* Trip Type */}
        <div className="form-group">
          <label>Travel Type</label>
          <select
            value={formData.tripType || ""}
            onChange={(e) => handleChange("tripType", e.target.value)}
          >
            <option value="">Select</option>
            <option value="domestic">Within India</option>
            <option value="international">International</option>
          </select>
        </div>

        {/* Booking Assistance */}
        <div className="form-group">
          <label>Do you need booking assistance?</label>
          <select
            value={formData.booking || ""}
            onChange={(e) => handleChange("booking", e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes, please help with bookings</option>
            <option value="no">No, I’ll manage myself</option>
          </select>
        </div>

        {/* Departure City */}
        {formData.booking === "yes" && (
          <div className="form-group">
            <label>Departure City</label>
            <select
              value={formData.source || ""}
              onChange={(e) => handleChange("source", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>
        )}

        {/* Destination */}
        <div className="form-group">
          <label>
            {formData.tripType === "domestic"
              ? "Indian Destination"
              : "International Destination"}
          </label>
          <select
            value={formData.destination || ""}
            onChange={(e) => handleChange("destination", e.target.value)}
          >
            <option value="">Select</option>
            {formData.tripType === "domestic" ? (
              <>
                <option value="Goa">Goa</option>
                <option value="Manali">Manali</option>
                <option value="Kerala">Kerala</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Andaman">Andaman</option>
              </>
            ) : (
              <>
                <option value="Dubai">Dubai</option>
                <option value="Bali">Bali</option>
                <option value="Maldives">Maldives</option> 
                <option value="Paris">Paris</option>
                <option value="Singapore">Singapore</option>
                <option value="Thailand">Thailand</option>
              </>
            )}
          </select>
        </div>

        {/* Month */}
        <div className="form-group">
          <label>Preferred Month</label>
          <select
            value={formData.month || ""}
            onChange={(e) => handleChange("month", e.target.value)}
          >
            <option value="">Select</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Trip Duration</label>
          <select
            value={formData.duration || ""}
            onChange={(e) => handleChange("duration", e.target.value)}
          >
            <option value="">Select</option>
            <option value="1-3 days">1 to 3 days</option>
            <option value="4-6 days">4 to 6 days</option>
            <option value="7-9 days">7 to 9 days</option>
            <option value="10-12 days">10 to 12 days</option>
            <option value="13+ days">13 or more days</option>
          </select>
        </div>

        {/* Flexibility */}
        <div className="form-group">
          <label>Are your dates flexible?</label>
          <select
            value={formData.flexible || ""}
            onChange={(e) => handleChange("flexible", e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button
          className="submit-button"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Planning Your Journey..." : "Plan My Journey →"}
        </button>
      </div>
    </div>
  );
};

export default TripPlanner;
