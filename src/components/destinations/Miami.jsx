import React from "react";
import "../../styles/destinations/Miami.css";
import miamiImage from "../../assets/miami.jpg"; // Add your Miami image here
import Footer from "../../components/Footer";

const Miami = () => {
  return (
    <div className="miami-container">
      <h1 className="miami-heading">Miami</h1>
      <p className="miami-subtitle">
        Miami, located in southeastern Florida, is a tropical paradise known for
        its beautiful beaches, vibrant nightlife, and diverse cultural scene.
      </p>

      <img src={miamiImage} alt="Miami Beach" className="miami-image" />

      <div className="miami-content">
        <h2>Miami Travel Guide</h2>
        <p>
          Welcome to Miami, a vibrant and diverse city that offers a taste of
          the tropics with a cosmopolitan flair. Known for its bustling
          nightlife, rich cultural history, and stunning beaches, Miami,
          Florida's cultural and economic hub, is a haven for arts enthusiasts,
          foodies, and beach lovers alike.
        </p>

        <h2>How to Get There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> Miami International Airport (MIA) is one of
            the busiest international airports in the U.S.
          </li>
          <li>
            <strong>By Car:</strong> Easily accessible via major interstates and
            highways.
          </li>
          <li>
            <strong>By Sea:</strong> The Port of Miami is known as the Cruise
            Capital of the World.
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <p>
          Visit between April and June for the best weather. However, Miami’s
          tropical climate makes it a year-round destination.
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>South Beach:</strong> Iconic for its Art Deco design,
            beautiful sands, and vibrant nightlife.
          </li>
          <li>
            <strong>Art Deco Historic District:</strong> Home to over 800
            neon-lit heritage buildings.
          </li>
          <li>
            <strong>Little Havana & Calle Ocho:</strong> A celebration of Cuban
            culture, music, food, and murals.
          </li>
          <li>
            <strong>Vizcaya Museum and Gardens:</strong> Explore this historic
            villa with lavish gardens and European antiques.
          </li>
          <li>
            <strong>Bayside Marketplace:</strong> A lively bayfront destination
            with shopping, dining, and entertainment.
          </li>
        </ul>

        <h2>Museums and Cultural Sites</h2>
        <ul>
          <li>
            <strong>Pérez Art Museum Miami (PAMM):</strong> Showcases global
            modern and contemporary art.
          </li>
          <li>
            <strong>Frost Museum of Science:</strong> Features a planetarium,
            aquarium, and interactive exhibits.
          </li>
          <li>
            <strong>The Bass:</strong> Hosts contemporary international art
            exhibits.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <ul>
          <li>
            <strong>Versailles Restaurant:</strong> Famous for authentic Cuban
            dishes and casual ambiance.
          </li>
          <li>
            <strong>Joe's Stone Crab:</strong> A legendary spot for fresh
            seafood and key lime pie.
          </li>
          <li>
            <strong>Yardbird Southern Table & Bar:</strong> Known for Southern
            comfort classics with a modern twist.
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Everglades National Park:</strong> A biodiverse wetland
            perfect for airboat tours and wildlife spotting.
          </li>
          <li>
            <strong>Key West:</strong> The southernmost city in the U.S., ideal
            for scenic drives and laid-back exploration.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Art Basel:</strong> A global art fair spotlighting modern
            and contemporary masterpieces.
          </li>
          <li>
            <strong>Miami Carnival:</strong> Celebrates Caribbean culture with
            parades, music, food, and dancing.
          </li>
        </ul>

        <h2>Map of Miami</h2>
        <div className="miami-map">
          <iframe
            title="Map of Miami"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358185.1199560993!2d-80.43329988160349!3d25.782545330642214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69ad6922f0f%3A0x15bfb342a0f338e1!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1719059999999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          With its combination of urban sophistication and tropical dreaminess,
          Miami has something for everyone. Take a stroll down the stylish Ocean
          Drive, immerse yourself in a salsa-filled night in Little Havana or
          enjoy the sunrise from a paddleboard off the coast. Enjoy making
          unforgettable memories!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Miami;
