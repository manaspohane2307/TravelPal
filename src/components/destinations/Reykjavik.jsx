import React from "react";
import "../../styles/destinations/Reykjavik.css";
import reykjavikImage from "../../assets/reykjavik.webp"; // Ensure this .webp file exists
import Footer from "../../components/Footer";

const Reykjavik = () => {
  return (
    <div className="reykjavik-container">
      <h1 className="reykjavik-heading">Reykjavik</h1>
      <p className="reykjavik-quote">
        “A magical gateway to Iceland’s raw beauty — Reykjavik blends cozy
        culture with untamed nature.”
      </p>

      <img
        src={reykjavikImage}
        alt="Reykjavik Iceland"
        className="reykjavik-image"
      />

      <div className="reykjavik-content">
        <h2>Reykjavik Travel Guide</h2>
        <p>
          Reykjavik, the northernmost capital of the world, offers a mesmerizing
          blend of cool cosmopolitan culture and natural wonders right at its
          doorstep. From its vibrant art scene to the breathtaking landscapes
          surrounding the city, Reykjavik promises an unforgettable vacation
          experience.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Hallgrímskirkja:</strong> Iconic Lutheran church with a
            towering spire and panoramic views from its observation deck.
          </li>
          <li>
            <strong>Harpa Concert Hall:</strong> A stunning glass building
            hosting world-class music events and offering guided architectural
            tours.
          </li>
          <li>
            <strong>The Sun Voyager (Sólfar):</strong> A dreamlike Viking ship
            sculpture ideal for sunset photography with Mount Esja in the
            background.
          </li>
          <li>
            <strong>Reykjavik's Geothermal Pools:</strong> Visit Laugardalslaug
            or other local hot pools for a relaxing Icelandic tradition.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Golden Circle Tour:</strong> Includes Geysir geothermal
            area, Gullfoss waterfall, and Þingvellir National Park — all within
            a day’s drive from the city.
          </li>
          <li>
            <strong>Blue Lagoon:</strong> A mineral-rich geothermal spa where
            you can relax in turquoise waters surrounded by volcanic rock.
          </li>
          <li>
            <strong>Perlan:</strong> Visit for interactive exhibitions on
            Icelandic nature, a 360° viewing platform, and a rotating
            restaurant.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <p>
          Reykjavik offers boutique hotels, downtown hostels, and cozy
          guesthouses — mostly within walking distance of top attractions. For a
          scenic and quieter option, try countryside lodges just outside the
          city.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Fly into Keflavik International
            Airport (KEF). Airport buses like Flybus and Airport Direct connect
            to Reykjavik.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> Summer (June–August) for long
            daylight hours; winter (September–April) for the Northern Lights.
          </li>
          <li>
            <strong>Getting Around:</strong> Reykjavik is walkable. For
            countryside trips, car rental is recommended. Public buses are
            available but limited in remote areas.
          </li>
          <li>
            <strong>Language & Currency:</strong> Icelandic is the official
            language, but English is widely spoken. Currency is the Icelandic
            Króna (ISK).
          </li>
        </ul>

        <h2>Map of Reykjavik</h2>
        <div className="reykjavik-map">
          <iframe
            title="Reykjavik Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21065.730730120437!2d-21.9385658!3d64.1353386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60a1e328f4201%3A0x28e405e2c6bc9342!2sReykjav%C3%ADk%2C%20Iceland!5e0!3m2!1sen!2sin!4v1719111000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Whether you’re chasing the Northern Lights, relaxing in geothermal
          waters, or exploring modern Nordic culture, Reykjavik is your basecamp
          for an unforgettable Icelandic journey.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Reykjavik;
