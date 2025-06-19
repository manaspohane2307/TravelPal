import React from "react";
import "../../styles/destinations/Bangkok.css";
import bangkokImage from "../../assets/bangkok.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Bangkok = () => {
  return (
    <div className="bangkok-container">
      <h1 className="bangkok-heading">Bangkok</h1>

      <p className="bangkok-quote">
        "Bangkok’s intoxicating mix of ancient temples and buzzing street life
        ensures a sensory-rich experience that stays with you forever."
      </p>

      <img src={bangkokImage} alt="Bangkok" className="bangkok-main-image" />

      <div className="bangkok-content">
        <h2>Bangkok Travel Guide</h2>
        <p>
          Bangkok, Thailand's bustling capital, is a city that fascinates with
          its splendid temples, vibrant street life, and an unparalleled
          culinary scene. From the majestic Chao Phraya River flowing through
          its heart to the intricate details of its historic architecture,
          Bangkok offers an adventure that juxtaposes tradition with modernity
          in the most captivating way.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Grand Palace and Wat Phra Kaew:</strong> Explore the
            stunning Grand Palace complex and the revered Temple of the Emerald
            Buddha.
          </li>
          <li>
            <strong>Wat Arun (Temple of Dawn):</strong> Located on the
            riverbank, this temple offers one of Bangkok’s most iconic sunset
            views.
          </li>
          <li>
            <strong>Chatuchak Weekend Market:</strong> One of the world’s
            largest markets — a paradise for bargain hunters and street food
            lovers.
          </li>
          <li>
            <strong>Asiatique The Riverfront:</strong> A lively night market
            with shopping, food, and river views.
          </li>
        </ul>

        {/* Google Map */}
        <div className="bangkok-map">
          <h2>Map of Bangkok</h2>
          <iframe
            title="Bangkok Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194337.1778720066!2d100.36916799838694!3d13.723351199060556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994c3fffa31d%3A0x40223bc0c0a2800!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1750475661011!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Jim Thompson House Museum:</strong> Traditional Thai home
            with Southeast Asian art and silk history.
          </li>
          <li>
            <strong>Bangkok National Museum:</strong> Dive deep into Thailand’s
            history and culture.
          </li>
          <li>
            <strong>Erawan Shrine:</strong> A spiritual landmark known for
            prayers, dances, and golden Brahma statue.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Ayutthaya:</strong> Explore ancient temple ruins and take a
            scenic river cruise.
          </li>
          <li>
            <strong>Floating Markets:</strong> Damnoen Saduak and Amphawa
            markets offer river-side culture and food.
          </li>
          <li>
            <strong>Kanchanaburi:</strong> Visit the River Kwai Bridge and
            nearby waterfalls and caves.
          </li>
          <li>
            <strong>Pattaya:</strong> Coastal city with beaches, nightlife, and
            water adventures.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <p>
          Bangkok offers a wide range of accommodation — from luxury riverside
          hotels to budget hostels in vibrant neighborhoods like Sukhumvit and
          Silom. These areas provide great access to shopping, nightlife, and
          public transit.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Accessible via Suvarnabhumi (BKK)
            and Don Mueang (DMK) airports.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> November to February for
            cooler, dry weather.
          </li>
          <li>
            <strong>Transportation:</strong> Use BTS Skytrain, MRT, ferries, or
            tuk-tuks — always confirm price before riding.
          </li>
          <li>
            <strong>Currency:</strong> Thai Baht (THB); ATMs and exchange booths
            are widely available.
          </li>
          <li>
            <strong>Etiquette:</strong> Dress modestly at temples and show
            respect for royal and religious sites.
          </li>
        </ul>

        <p>
          For official updates and travel planning, visit the{" "}
          <a
            href="https://www.tourismthailand.org"
            target="_blank"
            rel="noreferrer"
          >
            Tourism Thailand
          </a>{" "}
          website.
        </p>

        <p>
          Bangkok’s blend of cultural heritage and buzzing energy makes it one
          of Southeast Asia’s most exciting destinations. Whether you're
          temple-hopping, market-hunting, or sunset-cruising — the city promises
          a magical journey.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Bangkok;
