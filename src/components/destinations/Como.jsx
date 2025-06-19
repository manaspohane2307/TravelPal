import React from "react";
import "../../styles/destinations/Como.css";
import comoImage from "../../assets/como.jpg"; // Make sure this image exists
import Footer from "../../components/Footer";

const Como = () => {
  return (
    <div className="como-container">
      <h1 className="como-heading">Como</h1>

      <p className="como-tagline">
        An Italian gem, often overlooked, but brimming with mesmerizing
        landscapes, historic landmarks, and rich cultural delights.
      </p>

      <img src={comoImage} alt="Lake Como" className="como-main-image" />

      <div className="como-content">
        <h2>Lake Como, Italy Travel Guide</h2>
        <p>
          Como, nestled at the southern tip of Lake Como in Northern Italy, is a
          picturesque city that offers a blend of stunning landscapes, rich
          history, and vibrant culture.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Lake Como:</strong> A haven for boating, windsurfing, and
            ferry rides.
          </li>
          <li>
            <strong>Como Cathedral (Duomo di Como):</strong> A stunning example
            of Gothic and Renaissance architecture.
          </li>
          <li>
            <strong>Villa Olmo:</strong> A neoclassical villa with lakeside
            gardens and exhibitions.
          </li>
          <li>
            <strong>Funicolare Como-Brunate:</strong> Historic railway offering
            panoramic lake and Alpine views.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Bellagio:</strong> Cobblestone streets and romantic
            waterfronts.
          </li>
          <li>
            <strong>Villa del Balbianello:</strong> Featured in Star Wars and
            James Bond, with breathtaking gardens.
          </li>
          <li>
            <strong>Villa Carlotta:</strong> Botanical beauty and art
            collections harmonize perfectly.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Milan:</strong> Fashion capital and cultural hub, just 1
            hour away.
          </li>
          <li>
            <strong>St. Moritz:</strong> Swiss ski town ideal for scenic
            adventures.
          </li>
          <li>
            <strong>Cinque Terre:</strong> Colorful cliffside villages with
            dramatic coastlines.
          </li>
        </ul>

        <h2>Accommodations</h2>
        <p>
          Como offers everything from luxury lakeside resorts to charming B&Bs
          in the old town. Most provide excellent lake views and quick access to
          attractions.
        </p>

        <h2>Dining & Restaurants</h2>
        <p>
          Savor local specialties like{" "}
          <em>risotto con filetti di pesce persico</em> and{" "}
          <em>polenta uncia</em>.
        </p>
        <ul>
          <li>
            <strong>The Market Place Restaurant:</strong> Creative dining with
            locally sourced ingredients.
          </li>
          <li>
            <strong>Ristorante Sociale Como:</strong> Traditional Italian meals
            in a historic ambiance.
          </li>
        </ul>

        <div className="como-map">
          <h2>Map of Como</h2>
          <iframe
            title="Como Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11157.204915242018!2d9.08070362513957!3d45.80805947077288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47869efef5e6e2d5%3A0xbefad5f635e2ad3!2sComo%2C%20Province%20of%20Como%2C%20Italy!5e0!3m2!1sen!2sin!4v1718910000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> 40 mins by train from Milan; nearby
            airports include Malpensa and Linate.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> April to October is ideal for
            sightseeing and lake activities.
          </li>
          <li>
            <strong>Transportation:</strong> Ferries, walking, bicycles, and
            rental cars are all viable for exploring.
          </li>
          <li>
            <strong>Language & Currency:</strong> Italian and Euro (€); English
            is commonly spoken in tourist spots.
          </li>
        </ul>

        <p>
          For official tourism details, visit the{" "}
          <a
            href="https://www.italia.it/en/lombardy/como"
            target="_blank"
            rel="noreferrer"
          >
            Italy Tourism Website
          </a>
          .
        </p>

        <p>
          Whether you’re savoring lakefront meals, touring villas, or cruising
          across the lake, Como offers an experience that combines nature,
          culture, and timeless Italian charm.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Como;
