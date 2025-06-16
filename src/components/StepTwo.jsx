import React from "react";
import "../styles/StepTwo.css";

const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="step-two-page">
      <h2>Travel Preferences</h2>

      <div className="form-group">
        <label>Who are you traveling with?</label>
        <select
          name="travelCompanion"
          value={formData.travelCompanion || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Solo">Solo</option>
          <option value="Partner">Partner</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Group">Group</option>
        </select>
      </div>

      <div className="form-group">
        <label>Age Group</label>
        <select
          name="ageGroup"
          value={formData.ageGroup || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="18-25">18–25</option>
          <option value="26-35">26–35</option>
          <option value="36-50">36–50</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <div className="form-group">
        <label>Preferred Travel Pace</label>
        <select
          name="travelPace"
          value={formData.travelPace || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Moderate">Moderate</option>
          <option value="Fast-Paced">Fast-Paced</option>
        </select>
      </div>

      <div className="form-group">
        <label>Preferred Mode of Transport</label>
        <select
          name="transportMode"
          value={formData.transportMode || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Flight">Flight</option>
          <option value="Train">Train</option>
          <option value="Bus">Bus</option>
          <option value="Car">Car</option>
        </select>
      </div>

      <div className="form-group">
        <label>Budget (per person)</label>
        <select
          name="budget"
          value={formData.budget || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Economical">Economical</option>
          <option value="Mid-range">Mid-range</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      <div className="form-group">
        <label>What is your accommodation preference?</label>
        <select
          name="accommodation"
          value={formData.accommodation || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Budget">Budget (Hostels, BnBs)</option>
          <option value="Mid-range">Mid-range hotels</option>
          <option value="Luxury">Luxury hotels/resorts</option>
          <option value="Unique">Unique stays (treehouse, homestays)</option>
        </select>
      </div>

      <div className="form-group">
        <label>Are you interested in nightlife and party scenes?</label>
        <select
          name="nightlife"
          value={formData.nightlife || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Occasionally">Occasionally</option>
        </select>
      </div>

      <div className="form-group">
        <label>Are you open to adventure or outdoor activities?</label>
        <select
          name="adventure"
          value={formData.adventure || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Depends">Depends on the location</option>
        </select>
      </div>

      <div className="form-group">
        <label>Are you interested in cultural experiences?</label>
        <select
          name="culture"
          value={formData.culture || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Somewhat">Somewhat</option>
        </select>
      </div>

      <div className="form-row">
        <button className="next-button" onClick={prevStep}>
          Back
        </button>
        <button className="next-button" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
