import React from "react";
import "../../styles/destinations/Hamburg.css";
import hamburgImage from "../../assets/hamburg.jpg"; // Make sure this image exists
import Footer from "../../components/Footer";

const Hamburg = () => {
  return (
    <div className="hamburg-container">
      <h1 className="hamburg-heading">Hamburg</h1>
      <p className="hamburg-tagline">
        Hamburg is a city where history and modernity converge dramatically,
        offering visitors a vibrant cultural scene alongside rich maritime
        heritage.
      </p>

      <img
        src={hamburgImage}
        alt="Hamburg City"
        className="hamburg-main-image"
      />

      <div className="hamburg-content">
        <h2>Welcome to Hamburg</h2>
        <p>
          Germany's gateway to the world, Hamburg is renowned for its scenic
          harbor, architectural marvels, and cultural vibrance. Whether you're a
          history enthusiast or a modern traveler, Hamburg offers an enriching
          and memorable experience.
        </p>

        <h2>Top Attractions in Hamburg</h2>
        <ul>
          <li>
            <strong>Miniatur Wunderland:</strong> Explore the world’s largest
            model railway with detailed global regions. A must-visit for all
            ages.
          </li>
          <li>
            <strong>Hamburg Elbphilharmonie:</strong> This futuristic concert
            hall offers world-class acoustics and incredible views over the
            harbor.
          </li>
          <li>
            <strong>Speicherstadt & Kontorhaus District:</strong> Wander through
            UNESCO-listed warehouse complexes and admire Neo-Gothic
            architecture.
          </li>
          <li>
            <strong>Planten un Blomen:</strong> A stunning botanical park with
            light shows and Japanese gardens.
          </li>
          <li>
            <strong>St. Michael's Church ("Michel"):</strong> Climb the tower
            for panoramic views of Hamburg’s skyline and harbor.
          </li>
          <li>
            <strong>International Maritime Museum:</strong> Ten stories of
            maritime artifacts and ship models showcasing Hamburg’s nautical
            legacy.
          </li>
        </ul>

        <h2>Local Cuisine</h2>
        <ul>
          <li>
            <strong>Fischmarkt:</strong> Try local seafood delicacies and
            freshly caught fish.
          </li>
          <li>
            <strong>Franzbrötchen:</strong> A sweet cinnamon pastry native to
            Hamburg.
          </li>
          <li>
            <strong>Labskaus:</strong> A traditional sailor’s dish with beef,
            potatoes, beetroot, and herring.
          </li>
        </ul>

        <h2>Cultural Insights</h2>
        <ul>
          <li>
            <strong>Reeperbahn:</strong> Hamburg’s lively red-light district,
            brimming with theaters, nightclubs, and Beatles history.
          </li>
          <li>
            <strong>Harbor Tours:</strong> Take a boat from Landungsbrücken to
            see the port from the water.
          </li>
        </ul>

        <h2>Shopping & Leisure</h2>
        <ul>
          <li>
            <strong>Mönckebergstraße:</strong> Shop major retail brands and
            boutiques in one of Hamburg’s oldest streets.
          </li>
          <li>
            <strong>Schanzenviertel:</strong> A boho district full of cafés,
            galleries, and indie fashion stores.
          </li>
        </ul>

        <h2>Annual Events</h2>
        <ul>
          <li>
            <strong>Hafengeburtstag:</strong> Celebrated each May, Hamburg’s
            harbor birthday includes ship parades and fireworks.
          </li>
          <li>
            <strong>Hamburg DOM:</strong> The region’s largest funfair held
            three times a year with rides, food, and games.
          </li>
        </ul>

        <h2>Practical Information</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Fly into Hamburg Airport or take a
            DB Bahn train from anywhere in Europe.
          </li>
          <li>
            <strong>Getting Around:</strong> Public transport (HVV) includes
            buses, U-Bahn, S-Bahn, and ferries.
          </li>
          <li>
            <strong>Weather:</strong> Mild maritime climate makes Hamburg great
            year-round; best months are May–September.
          </li>
        </ul>

        <h2>Map of Hamburg</h2>
        <div className="hamburg-map">
          <iframe
            title="Map of Hamburg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95177.06321105549!2d9.918414500000002!3d53.5510846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f0fcf2617e7%3A0x4263df27bd74870!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sin!4v1718919999999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p>
          Whether you're exploring maritime museums, catching sunset views from
          Elphi, or sipping coffee in Schanzenviertel, Hamburg is a perfect
          blend of the past and the future. Discover why it's one of Germany’s
          most dynamic cities.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Hamburg;
