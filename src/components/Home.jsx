import React from "react";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "./WhoWeAre";
import TellUsYourPlans from "../components/TellUsYourPlans";
import HowItWorks from "../components/HowItWorks";
import ExploreTools from "../components/ExploreTools";
import ConclusionSection from "../components/ConclusionSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <TellUsYourPlans />
      <HowItWorks />
      <ExploreTools />
      <ConclusionSection />
      <Footer />
    </>
  );
};

export default Home;
