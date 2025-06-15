import React from "react";
import "../styles/StepFour.css";

const StepFour = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="step-four-page">
      <h2>Experience Preferences</h2>

      <div className="form-group">
        <label>What kind of travel experience are you seeking?</label>
        <select
          name="travelExperience"
          onChange={handleChange}
          value={formData.travelExperience || ""}
        >
          <option value="">Select</option>
          <option value="Relaxing vacation">Relaxing vacation</option>
          <option value="Cultural exploration">Cultural exploration</option>
          <option value="Adventure & activities">Adventure & activities</option>
          <option value="Nature & wildlife">Nature & wildlife</option>
          <option value="Romantic getaway">Romantic getaway</option>
          <option value="Spiritual & wellness">Spiritual & wellness</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Are you interested in attending any local festivals or events?
        </label>
        <select
          name="localFestivals"
          onChange={handleChange}
          value={formData.localFestivals || ""}
        >
          <option value="">Select</option>
          <option value="Yes, definitely">Yes, definitely</option>
          <option value="No, not really">No, not really</option>
          <option value="If it fits the schedule">
            If it fits the schedule
          </option>
        </select>
      </div>

      <div className="form-group">
        <label>
          How important is photography or Instagram-worthy spots for your trip?
        </label>
        <select
          name="photographyImportance"
          onChange={handleChange}
          value={formData.photographyImportance || ""}
        >
          <option value="">Select</option>
          <option value="Very important">Very important</option>
          <option value="Somewhat important">Somewhat important</option>
          <option value="Not important">Not important</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Do you enjoy nature-based activities like national parks, safaris,
          beaches, etc.?
        </label>
        <select
          name="natureBasedActivities"
          onChange={handleChange}
          value={formData.natureBasedActivities || ""}
        >
          <option value="">Select</option>
          <option value="Love them!">Love them!</option>
          <option value="Only a few">Only a few</option>
          <option value="Prefer city activities">Prefer city activities</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Would you like spa/wellness experiences like massages, yoga,
          meditation?
        </label>
        <select
          name="spaWellness"
          onChange={handleChange}
          value={formData.spaWellness || ""}
        >
          <option value="">Select</option>
          <option value="Yes, please">Yes, please</option>
          <option value="Not really interested">Not really interested</option>
          <option value="Maybe, if time allows">Maybe, if time allows</option>
        </select>
      </div>

      <div className="form-group">
        <label>How much free time would you like in your itinerary?</label>
        <select
          name="freeTimePreference"
          onChange={handleChange}
          value={formData.freeTimePreference || ""}
        >
          <option value="">Select</option>
          <option value="Lots of free time">Lots of free time</option>
          <option value="Moderate free time">Moderate free time</option>
          <option value="Packed with activities">Packed with activities</option>
        </select>
      </div>

      <div className="button-row">
        <button className="form-button" onClick={prevStep}>
          Back
        </button>
        <button className="form-button" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepFour;
