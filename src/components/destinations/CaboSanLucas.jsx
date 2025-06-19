import React from "react";
import "../../styles/destinations/CaboSanLucas.css";
import caboImage from "../../assets/cabosanlucas.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const CaboSanLucas = () => {
  return (
    <div className="cabo-container">
      <h1 className="cabo-heading">Cabo San Lucas</h1>

      <p className="cabo-quote">
        Dive into the vibrant allure of Cabo San Lucas, where sun-kissed
        beaches, rich marine life, thrilling adventures, and vibrant nightlife
        await.
      </p>

      <img src={caboImage} alt="Cabo San Lucas" className="cabo-main-image" />

      <div className="cabo-content">
        <h2>Discover Cabo San Lucas</h2>
        <p>
          Nestled at the southern tip of Mexico's Baja California Peninsula,
          Cabo San Lucas is a captivating destination where the Pacific Ocean
          meets the Sea of Cortez. Known for its stunning beaches, vibrant
          nightlife, and luxurious resorts, this coastal paradise is a haven for
          travelers seeking both adventure and relaxation.
        </p>

        <h2>Top Attractions & Experiences</h2>
        <ul>
          <li>
            <strong>El Arco de Cabo San Lucas:</strong> Take a boat tour to see
            this iconic rock formation and watch playful sea lions nearby.
          </li>
          <li>
            <strong>Medano Beach:</strong> Cabo’s most famous beach with golden
            sands, calm waters, and plenty of water sports.
          </li>
          <li>
            <strong>Cabo Pulmo National Park:</strong> A diver’s paradise filled
            with vibrant coral reefs and marine life.
          </li>
          <li>
            <strong>San José del Cabo:</strong> Explore art galleries, colonial
            architecture, and attend the weekly Thursday Art Walk.
          </li>
        </ul>

        {/* Google Map */}
        <div className="cabo-map">
          <h2>Map of Cabo San Lucas</h2>
          <iframe
            title="Cabo San Lucas Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.206493230761!2d-109.915436385065!3d22.89053398501279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af51fc7876c945%3A0x86e733659fa13a6e!2sCabo%20San%20Lucas%2C%20Baja%20California%20Sur%2C%20Mexico!5e0!3m2!1sen!2sin!4v1750487500000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>Adventure & Outdoor Activities</h2>
        <ul>
          <li>
            <strong>Whale Watching:</strong> See humpback whales from December
            to April during their migration season.
          </li>
          <li>
            <strong>Surfing & Water Sports:</strong> Zippers and Monuments Beach
            are great for surfing; rentals and lessons available.
          </li>
          <li>
            <strong>Desert Adventures:</strong> Explore via ATVs or camel
            safaris through Cabo’s rugged terrain.
          </li>
        </ul>

        <h2>Culinary Highlights</h2>
        <p>
          Cabo blends bold Mexican flavors with ocean-fresh seafood. Dine at
          Edith’s Restaurante for local delicacies or try the fusion cuisine at
          Nick-San. Don’t forget to sip tequila or mezcal while enjoying a
          coastal sunset.
        </p>

        <h2>Vibrant Nightlife</h2>
        <p>
          Cabo comes alive after dark. Dance the night away at El Squid Roe or
          unwind with craft cocktails at The Cape Hotel’s rooftop bar
          overlooking the Pacific.
        </p>

        <h2>Getting There</h2>
        <p>
          The Los Cabos International Airport (SJD) is about 28 miles from Cabo
          San Lucas and connects to major U.S. and Mexican cities. Local
          transport options include taxis, shared shuttles, or rental cars for
          maximum flexibility.
        </p>

        <h2>Tips for Travelers</h2>
        <ul>
          <li>
            <strong>Currency:</strong> Mexican Peso (MXN), though USD is
            accepted in most tourist areas.
          </li>
          <li>
            <strong>Safety:</strong> Cabo is safe overall—just remain alert,
            especially at night in busy spots.
          </li>
          <li>
            <strong>Climate:</strong> With 300+ sunny days a year, visit between
            November and April for cooler weather.
          </li>
        </ul>

        <h2>Travel FAQs</h2>
        <ul>
          <li>
            <strong>Is Cabo San Lucas safe for tourists?</strong> Yes,
            especially in resort and tourist zones. Practice common travel
            awareness.
          </li>
          <li>
            <strong>What’s the best time to visit?</strong> November to April
            for ideal weather and outdoor activities.
          </li>
          <li>
            <strong>How many days should I spend in Cabo?</strong> 3–5 days is
            ideal for beach time, adventures, and local exploration.
          </li>
          <li>
            <strong>What should I pack?</strong> Swimwear, sandals, sunglasses,
            reef-safe sunscreen, and a light jacket for evenings.
          </li>
        </ul>

        <p>
          For more travel updates and resources, visit the official site for
          Mexico tourism:{" "}
          <a
            href="https://www.visitmexico.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Mexico
          </a>
          .
        </p>

        <p>
          Cabo San Lucas blends beach luxury, marine magic, thrilling tours, and
          vibrant nightlife into one unforgettable trip. Whether you're relaxing
          in a resort or exploring the desert on an ATV, Cabo welcomes you with
          open arms.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default CaboSanLucas;
