import React from "react";
import "../../styles/destinations/Marrakech.css";
import marrakechImage from "../../assets/marrakech.jpg"; // Add a relevant image in assets
import Footer from "../../components/Footer";

const Marrakech = () => {
  return (
    <div className="marrakech-container">
      <h1 className="marrakech-heading">Marrakech</h1>
      <p className="marrakech-subtitle">
        Renowned for its bustling souks, majestic palaces, and serene gardens,
        Marrakech invites travelers to immerse in an enchanting world of color,
        spice, and endless adventure.
      </p>

      <img
        src={marrakechImage}
        alt="Marrakech City"
        className="marrakech-image"
      />

      <div className="marrakech-content">
        <h2>Marrakech Travel Guide</h2>
        <p>
          Marrakech, a city where ancient traditions seamlessly blend with
          contemporary flair, stands as a vibrant testament to Morocco's rich
          history and culture.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Jemaa el-Fnaa:</strong> A lively square filled with
            entertainers, market stalls, and food vendors.
          </li>
          <li>
            <strong>Majorelle Garden:</strong> A peaceful, colorful garden with
            cacti and fountains, restored by Yves Saint Laurent.
          </li>
          <li>
            <strong>Bahia Palace:</strong> Marvel at intricate mosaics and lush
            courtyards reflecting Moroccan artistry.
          </li>
          <li>
            <strong>Medina of Marrakech:</strong> A UNESCO site full of vibrant
            souks and historic architecture.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Koutoubia Mosque:</strong> An iconic 12th-century mosque
            with a soaring minaret and tranquil gardens.
          </li>
          <li>
            <strong>Saadian Tombs:</strong> Ornate tombs showcasing the Saadian
            dynasty’s grandeur.
          </li>
          <li>
            <strong>El Badi Palace:</strong> Explore the ruins of this majestic
            16th-century palace that once symbolized Moroccan royalty.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Ourika Valley:</strong> A nature-filled escape in the Atlas
            Mountains with cool rivers and Berber culture.
          </li>
          <li>
            <strong>Essaouira:</strong> A coastal town known for surfing,
            seafood, and Portuguese-era fortifications.
          </li>
          <li>
            <strong>Ouzoud Waterfalls:</strong> Marvel at cascading falls
            surrounded by monkeys and olive groves.
          </li>
          <li>
            <strong>Aït Benhaddou:</strong> A striking ksar used as a filming
            location for movies like Gladiator and Game of Thrones.
          </li>
        </ul>

        <h2>Map of Marrakech</h2>
        <div className="marrakech-map">
          <iframe
            title="Map of Marrakech"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.749320141737!2d-7.989160584814354!3d31.62947278133815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeef49a3e177b%3A0x9a1182c882f6cb6b!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sin!4v1719028000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h2>Accommodations</h2>
        <p>
          Marrakech offers an array of lodging choices, from ornate riads tucked
          into the medina to modern luxury hotels. Riads—traditional Moroccan
          houses with inner courtyards—are ideal for travelers wanting an
          immersive experience.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Fly into Marrakech-Menara Airport or
            arrive via train from major Moroccan cities.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> Spring and fall offer the most
            pleasant climate for sightseeing.
          </li>
          <li>
            <strong>Getting Around:</strong> Walk within the medina, or use
            petit taxis for longer routes (always agree on fare).
          </li>
          <li>
            <strong>Languages:</strong> Arabic and Berber are official; French
            is widely spoken. English is common in tourist areas.
          </li>
          <li>
            <strong>Currency:</strong> Moroccan Dirham (MAD). Carry small notes
            and expect to negotiate in souks.
          </li>
          <li>
            <strong>Etiquette:</strong> Dress modestly, especially in religious
            or rural areas. Haggling is customary in markets.
          </li>
        </ul>

        <p>
          For more travel info, visit the official Morocco tourism site:{" "}
          <a
            href="https://www.visitmorocco.com/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Morocco
          </a>
        </p>

        <p>
          Marrakech is a journey through time—its maze-like medina, fragrant
          spice markets, opulent architecture, and warm hospitality ensure an
          unforgettable adventure.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Marrakech;
