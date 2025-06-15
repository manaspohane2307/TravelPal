import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import FinalStep from "./FinalStep";
import "../styles/TripPlanner.css";

const TripPlanner = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return <FinalStep formData={formData} prevStep={prevStep} />;
      default:
        return (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>🎉 All steps completed!</h2>
            <pre
              style={{
                background: "#f5f5f5",
                color: "#333",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "800px",
                margin: "20px auto",
                textAlign: "left",
                overflowX: "auto",
              }}
            >
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        );
    }
  };

  return (
    <div className="trip-planner-wrapper">
      <h1 className="trip-planner-title">Tell us your travel preferences</h1>
      <p className="trip-planner-title">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      {renderStep()}
    </div>
  );
};

export default TripPlanner;
