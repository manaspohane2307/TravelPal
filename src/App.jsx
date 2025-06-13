import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TellUsYourPlans from "./components/TellUsYourPlans";
import HowItWorks from "./components/HowItWorks";
import ExploreTools from "./components/ExploreTools";
import ConclusionSection from "./components/ConclusionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <HeroSection />
        <TellUsYourPlans />
        <HowItWorks />
        <ExploreTools />
        <ConclusionSection />
        <Footer />
        {/* More homepage sections will go here */}
      </main>
    </div>
  );
}

export default App;



