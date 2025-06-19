import React from "react";
import "../../styles/destinations/Moritz.css";
import moritzImage from "../../assets/moritz.jpg"; // Replace with actual image path
import Footer from "../../components/Footer";

const Moritz = () => {
  return (
    <div className="moritz-container">
      <h1 className="moritz-heading">St. Moritz, Switzerland</h1>
      <p className="moritz-quote">
        “St. Moritz is not just a place – it’s a lifestyle of elegance, snow,
        and serenity.”
      </p>

      <img
        src={moritzImage}
        alt="St. Moritz, Switzerland"
        className="moritz-image"
      />

      <div className="moritz-content">
        <h2>St. Moritz, Switzerland Travel Guide</h2>
        <p>
          Welcome to St. Moritz, a pristine alpine resort town in Switzerland's
          Engadin valley, known for its high-end amenities, superior skiing, and
          posh atmosphere. This guide will provide you with all the necessary
          details you need for a fabulous vacation.
        </p>

        <h2>Getting to St. Moritz</h2>
        <p>
          St. Moritz is served by the Samedan Airport, but most travelers prefer
          flying into Zurich or Milan and then proceeding by the following
          options:
        </p>
        <ul>
          <li>
            <strong>By Train:</strong> Ride the scenic Glacier Express via Swiss
            Federal Railways.
          </li>
          <li>
            <strong>By Car:</strong> Drive from Zurich or Milan to soak in
            breathtaking landscapes.
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <ul>
          <li>
            <strong>Winter (Dec–Feb):</strong> Perfect for skiing, snowboarding,
            and elite social events.
          </li>
          <li>
            <strong>Summer (Jun–Aug):</strong> Great for hiking, lake
            activities, and outdoor festivals.
          </li>
        </ul>

        <h2>Skiing and Winter Sports</h2>
        <ul>
          <li>
            <strong>Corviglia:</strong> The signature ski area with scenic runs
            for all skill levels.
          </li>
          <li>
            <strong>Ski Schools:</strong> Learn or polish skills at the British
            Alpine Ski School or Swiss Ski School St. Moritz.
          </li>
          <li>
            <strong>Other Sports:</strong> Try snowboarding, ice skating,
            curling, or the famous Cresta Run toboggan track.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <ul>
          <li>
            <strong>Kulm Hotel</strong>
          </li>
          <li>
            <strong>Badrutt's Palace Hotel</strong>
          </li>
        </ul>
        <p>
          Both offer top-tier luxury, world-class service, and prime access to
          the town’s highlights.
        </p>

        <h2>Must-See Attractions</h2>
        <ul>
          <li>
            <strong>Lake St. Moritz:</strong> Enjoy serene views and watersports
            in summer.
          </li>
          <li>
            <strong>Via Serlas:</strong> Shop on Switzerland’s premier luxury
            shopping street.
          </li>
          <li>
            <strong>Engadine Museum & Leaning Tower:</strong> Dive into the
            region’s heritage and architecture.
          </li>
        </ul>

        <h2>Culinary Delights</h2>
        <ul>
          <li>
            <strong>Ecco on Snow:</strong> For Michelin-star gourmet
            experiences.
          </li>
          <li>
            <strong>Talvo by Dalsass:</strong> An unforgettable Swiss
            fine-dining experience.
          </li>
          <li>
            <strong>Pavarotti & Friends:</strong> Authentic Italian food in a
            cozy, elegant atmosphere.
          </li>
        </ul>

        <h2>Spa and Wellness</h2>
        <ul>
          <li>
            <strong>Kempinski The Spa:</strong> Fitness, relaxation, and beauty
            under one roof.
          </li>
          <li>
            <strong>Badrutt’s Palace Wellness:</strong> Saunas, massages, and
            luxury rejuvenation.
          </li>
          <li>
            <strong>Samedan Mineral Bath & Spa:</strong> Renowned for its
            therapeutic waters and beautiful design.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>White Turf:</strong> Horse racing on the frozen lake.
          </li>
          <li>
            <strong>Snow Polo World Cup:</strong> An elite equestrian event in
            the snow.
          </li>
          <li>
            <strong>St. Moritz Music Festival:</strong> An annual celebration of
            classical and contemporary music.
          </li>
        </ul>

        <h2>Additional Recommendations</h2>
        <ul>
          <li>
            <strong>Art & Culture:</strong> Visit galleries like Vito Schnabel
            and Galerie Gmurzynska.
          </li>
          <li>
            <strong>Nightlife:</strong> King’s Club at Badrutt’s Palace is the
            ultimate high-end nightspot.
          </li>
          <li>
            <strong>Shopping:</strong> Explore fine jewelry, Swiss watches, and
            global fashion houses on Via Serlas.
          </li>
          <li>
            <strong>Day Trips:</strong> Ride the Bernina Express or explore
            nearby Engadin villages for natural beauty and culture.
          </li>
        </ul>

        <h2>Map of St. Moritz</h2>
        <div className="moritz-map">
          <iframe
            title="Map of St. Moritz"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.869874631604!2d9.8355071!3d46.4982956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783bfe1905986f7%3A0x7f8a60fa8cf03e90!2sSt.%20Moritz%2C%207500%20St.%20Moritz%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1719075000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Whether you come for world-class skiing or peaceful lakeside summers,
          St. Moritz offers a balanced blend of luxury, nature, and Alpine
          heritage. Every season here has something magical to offer.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Moritz;
