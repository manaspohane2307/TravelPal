import React from "react";
import "../styles/StepOne.css";

const StepOne = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="step-one-page">
      <h2>Location and Date Preferences</h2>

      <div className="form-group">
        <label>Where are you starting from?</label>
        <input
          type="text"
          placeholder="e.g. Mumbai"
          value={formData.source || ""}
          onChange={(e) => setFormData({ ...formData, source: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>What's your destination?</label>
        <input
          type="text"
          placeholder="e.g. Dubai"
          value={formData.destination || ""}
          onChange={(e) =>
            setFormData({ ...formData, destination: e.target.value })
          }
        />
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label>Departure Date</label>
          <input
            type="date"
            value={formData.departure || ""}
            onChange={(e) =>
              setFormData({ ...formData, departure: e.target.value })
            }
          />
        </div>

        <div className="form-group half">
          <label>Return Date</label>
          <input
            type="date"
            value={formData.return || ""}
            onChange={(e) =>
              setFormData({ ...formData, return: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-group">
        <label>Are your dates flexible?</label>
        <select
          value={formData.flexible || ""}
          onChange={(e) =>
            setFormData({ ...formData, flexible: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="yes">Yes, I’m flexible</option>
          <option value="no">No, fixed dates</option>
        </select>
      </div>

      <div className="form-group">
        <label>Preferred trip duration (in days)</label>
        <input
          type="number"
          min="1"
          placeholder="e.g. 7"
          value={formData.duration || ""}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
        />
      </div>

      <button className="next-button" onClick={nextStep}>
        Next →
      </button>
    </div>
  );
};

export default StepOne;



