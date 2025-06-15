import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TellUsYourPlans from "./components/TellUsYourPlans";
import HowItWorks from "./components/HowItWorks";
import ExploreTools from "./components/ExploreTools";
import ConclusionSection from "./components/ConclusionSection";
import Footer from "./components/Footer";
import TripPlanner from "./components/TripPlanner";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TellUsYourPlans />
                <HowItWorks />
                <ExploreTools />
                <ConclusionSection />
                <Footer />
              </>
            }
          />

          {/* Trip Planner Page */}
          <Route path="/trip-planner" element={<TripPlanner />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;




