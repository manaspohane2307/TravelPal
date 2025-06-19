import React from "react";
import "../../styles/destinations/Tokyo.css";
import tokyoImage from "../../assets/tokyo.jpg"; // Use a .webp if available
import Footer from "../../components/Footer";

const Tokyo = () => {
  return (
    <div className="tokyo-container">
      <h1 className="tokyo-heading">Tokyo</h1>
      <p className="tokyo-quote">
        “A city where centuries-old traditions meet cutting-edge technology.”
      </p>

      <img src={tokyoImage} alt="Tokyo City View" className="tokyo-image" />

      <div className="tokyo-content">
        <h2>Tokyo Travel Guide</h2>
        <p>
          Welcome to Tokyo, Japan's bustling capital, a city that impressively
          harmonizes the ultramodern and the traditional. Expect towering
          skyscrapers, high-tech infrastructure juxtaposed with historic
          temples, and a unique culture that is a feast for all senses.
        </p>

        <h2>Best Time to Visit</h2>
        <ul>
          <li>
            <strong>Spring (Mar–May):</strong> Cherry blossoms and mild
            temperatures.
          </li>
          <li>
            <strong>Autumn (Sep–Nov):</strong> Stunning fall foliage and
            cultural festivals.
          </li>
          <li>
            <strong>Winter (Dec–Feb):</strong> Illuminations and lighter tourist
            crowds.
          </li>
          <li>
            <strong>Summer (Jun–Aug):</strong> Humid, but lively with fireworks
            and festivals.
          </li>
          <li>
            <strong>Golden Week:</strong> Late April–early May, busy but
            culturally rich.
          </li>
        </ul>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>The Imperial Palace</strong> – Historic heart of Tokyo
            surrounded by peaceful gardens.
          </li>
          <li>
            <strong>Tokyo Tower</strong> – Panoramic views and a symbol of
            Tokyo's skyline.
          </li>
          <li>
            <strong>Meiji Shrine</strong> – Spiritual sanctuary amidst forested
            grounds.
          </li>
          <li>
            <strong>Sensoji Temple</strong> – Tokyo’s oldest temple in vibrant
            Asakusa.
          </li>
          <li>
            <strong>Odaiba</strong> – Entertainment and futuristic architecture
            by the bay.
          </li>
        </ul>

        <h2>Museums and Cultural Sites</h2>
        <ul>
          <li>
            <strong>Tokyo National Museum</strong> – Traditional and ancient
            Japanese artifacts.
          </li>
          <li>
            <strong>Museum of Contemporary Art</strong> – Rotating modern
            exhibitions.
          </li>
          <li>
            <strong>Edo-Tokyo Museum</strong> – Explore life in Edo-period
            Tokyo.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <p>
          <strong>Food Streets:</strong>
        </p>
        <ul>
          <li>
            <strong>Omoide Yokocho</strong> – Cozy alley of yakitori spots and
            izakayas.
          </li>
          <li>
            <strong>Tsukiji Outer Market</strong> – Fresh seafood, snacks, and
            traditional groceries.
          </li>
        </ul>

        <p>
          <strong>Notable Restaurants:</strong>
        </p>
        <ul>
          <li>
            <strong>Sukiyabashi Jiro</strong> – Legendary sushi experience.
          </li>
          <li>
            <strong>Ichiran Ramen</strong> – Unique solo ramen dining.
          </li>
          <li>
            <strong>Rokurinsha</strong> – Tokyo’s best tsukemen (dipping ramen).
          </li>
          <li>
            <strong>Ukai Tofuya</strong> – Elevated tofu cuisine in a garden
            setting.
          </li>
          <li>
            <strong>Kyubey</strong> – Long-standing omakase sushi.
          </li>
          <li>
            <strong>Tapas Molecular Bar</strong> – Experimental dining in a
            8-seat bar.
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Nikko:</strong> UNESCO site with shrines, waterfalls, and
            forests.
          </li>
          <li>
            <strong>Kamakura:</strong> Coastal town with temples and giant
            Buddha statue.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Sumo Tournaments:</strong> Held seasonally in Ryogoku
            Kokugikan.
          </li>
          <li>
            <strong>Tokyo Festivals:</strong> Hanami, Tanabata, and fireworks
            displays.
          </li>
        </ul>

        <p>
          In Tokyo, every corner reveals something fascinating—from quiet
          temples to bustling arcades, Michelin-starred sushi to street ramen,
          anime culture to ancient rituals. Respect traditions, enjoy the
          hospitality, and immerse yourself in one of the most remarkable cities
          on Earth.
        </p>

        <h2>Map of Tokyo</h2>
        <div className="tokyo-map">
          <iframe
            title="Tokyo Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414153.1280874043!2d139.4523463688395!3d35.67334374047312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0e48ec605d%3A0x1e6f4be6f92b2f64!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1719122222222!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tokyo;
