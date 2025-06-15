import React from "react";
import "../styles/StepOne.css"; // Reuse StepOne styling

const StepThree = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="step-one-page">
      <h2>Food & Dietary Preferences</h2>

      <div className="form-group">
        <label>What type of food do you enjoy while traveling?</label>
        <select
          name="foodType"
          value={formData.foodType || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="local">Local/street food</option>
          <option value="vegetarian">Vegetarian/Vegan only</option>
          <option value="fineDining">Fine dining</option>
          <option value="anything">I eat anything</option>
        </select>
      </div>

      <div className="form-group">
        <label>Any dietary restrictions?</label>
        <input
          type="text"
          name="dietaryRestrictions"
          placeholder="e.g., Gluten-free, Halal, Lactose intolerant"
          value={formData.dietaryRestrictions || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Are you open to trying exotic or unfamiliar foods?</label>
        <select
          name="exoticFoods"
          value={formData.exoticFoods || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="yes">Yes, love experimenting</option>
          <option value="no">No, prefer familiar options</option>
          <option value="depends">Depends on the location</option>
        </select>
      </div>

      <div className="form-group">
        <label>Preferred meal types per day</label>
        <select
          name="mealTypes"
          value={formData.mealTypes || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="all">Breakfast, Lunch, Dinner</option>
          <option value="light">Light meals and snacks</option>
          <option value="brunch">Brunch and Dinner only</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Would you like us to recommend must-try dishes at your destination?
        </label>
        <select
          name="dishSuggestions"
          value={formData.dishSuggestions || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="yes">Yes, definitely!</option>
          <option value="no">No, I'll manage on my own</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Would you prefer food tours or culinary experiences (cooking classes,
          tastings)?
        </label>
        <select
          name="culinaryExperiences"
          value={formData.culinaryExperiences || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="yes">Yes, sounds fun!</option>
          <option value="no">No, not interested</option>
          <option value="maybe">Maybe, if time permits</option>
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

export default StepThree;
