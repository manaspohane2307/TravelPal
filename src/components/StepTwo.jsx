import React from "react";
import "../styles/StepTwo.css";

const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="step-two-page">
      <h2>Travel Preferences</h2>

      {/* Existing questions */}
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
        <label>Do you have a visa or need assistance?</label>
        <select name="visa" value={formData.visa || ""} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Have Visa">I already have a visa</option>
          <option value="Need Assistance">I need visa assistance</option>
          <option value="Visa Free">Destination is visa-free</option>
        </select>
      </div>

      {/* New Questions */}
      <div className="form-group">
        <label>What is your preferred travel pace?</label>
        <select
          name="detailedTravelPace"
          value={formData.detailedTravelPace || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Moderate">Moderate</option>
          <option value="Packed">Packed with activities</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Do you enjoy guided tours or prefer exploring on your own?
        </label>
        <select
          name="tourPreference"
          value={formData.tourPreference || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Guided Tours">Guided tours</option>
          <option value="Self">Self-exploration</option>
          <option value="Mix">Mix of both</option>
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
        <label>Do you want time allocated for shopping or local markets?</label>
        <select
          name="shopping"
          value={formData.shopping || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Maybe">Maybe</option>
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

      <div className="form-group">
        <label>What is your food preference while traveling?</label>
        <select name="food" value={formData.food || ""} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Local">Local/Street food</option>
          <option value="Veg">Vegetarian/Vegan only</option>
          <option value="Fine Dining">Fine dining</option>
          <option value="Any">Any</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Do you prefer visiting popular tourist attractions or hidden gems?
        </label>
        <select
          name="spots"
          value={formData.spots || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Popular">Popular spots</option>
          <option value="Hidden">Hidden gems</option>
          <option value="Balanced">Balanced mix</option>
        </select>
      </div>

      <div className="form-group">
        <label>What is your ideal daily start time for sightseeing?</label>
        <select
          name="startTime"
          value={formData.startTime || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="7-9 AM">Early morning (7–9 AM)</option>
          <option value="9-11 AM">Mid-morning (9–11 AM)</option>
          <option value="Flexible">Flexible</option>
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
