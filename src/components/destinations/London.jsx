import React from "react";
import "../../styles/destinations/London.css";
import londonImage from "../../assets/london.jpg"; // Make sure this image exists
import Footer from "../../components/Footer";

const London = () => {
  return (
    <div className="london-container">
      <h1 className="london-heading">London</h1>
      <p className="london-quote">
        "When a man is tired of London, he is tired of life; for there is in
        London all that life can afford." – Samuel Johnson
      </p>

      <img src={londonImage} alt="London City" className="london-main-image" />

      <div className="london-content">
        <h2>London, England Travel Guide</h2>
        <p>
          Welcome to London, the diverse, pulsating heart of England. The city's
          grand history, reflected in its stunning architecture, combined with
          its modern flare and cultural vibrancy, promises an unmatched vacation
          experience. This guide will offer you a comprehensive view of the
          quintessential London experience, covering everything from majestic
          landmarks to hidden dining gems.
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>British Museum:</strong> Home to the Rosetta Stone and
            centuries of global history under one roof.
          </li>
          <li>
            <strong>The Tower of London:</strong> Dive into royal history,
            ancient towers, and the glittering Crown Jewels.
          </li>
          <li>
            <strong>The London Eye:</strong> Enjoy panoramic views from this
            iconic riverside Ferris wheel.
          </li>
          <li>
            <strong>Buckingham Palace:</strong> Witness regal ceremonies and
            royal architecture at the Queen’s official residence.
          </li>
          <li>
            <strong>The Shard:</strong> Visit Western Europe’s tallest
            skyscraper with restaurants and observation decks at the top.
          </li>
        </ul>

        <h2>Best Beaches (Short Trips)</h2>
        <ul>
          <li>
            <strong>Brighton Beach:</strong> Lively and colorful with its famous
            pier and pebble beach.
          </li>
          <li>
            <strong>Whitstable Beach:</strong> Famous for oysters, beach huts,
            and a peaceful seaside charm.
          </li>
        </ul>

        <h2>Map of London</h2>
        <div className="london-map">
          <iframe
            title="Map of London"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19804.957453759905!2d-0.135713!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3330e1f90f%3A0x144893cc7f22be5f!2sLondon!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Royal Albert Hall:</strong> Enjoy global music acts,
            classical orchestras, and special events in this legendary venue.
          </li>
          <li>
            <strong>The Globe Theatre:</strong> Watch Shakespeare performed as
            it was in the Bard’s time—open-air, powerful, and poetic.
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Stonehenge:</strong> Visit the ancient and mysterious stone
            circle—one of the world’s great wonders.
          </li>
          <li>
            <strong>Oxford:</strong> Stroll through historic colleges, beautiful
            gardens, and libraries straight out of fantasy novels.
          </li>
        </ul>

        <h2>Top Places to Dine</h2>
        <ul>
          <li>
            <strong>Dishoom:</strong> Enjoy delicious Indian dishes in a quirky
            yet cozy Bombay-inspired ambiance.
          </li>
          <li>
            <strong>Sketch:</strong> A design-forward experience serving gourmet
            food in rooms that feel like art installations.
          </li>
          <li>
            <strong>Dabbous:</strong> Michelin-star modern European cuisine in
            an industrial-chic setting.
          </li>
          <li>
            <strong>The Ledbury:</strong> Contemporary British fine dining at
            its absolute best with two Michelin stars.
          </li>
          <li>
            <strong>Duck & Waffle:</strong> Open 24/7 with stunning city views
            and a uniquely British menu served from high above.
          </li>
        </ul>

        <p>
          London’s charm lies in its ability to surprise and delight, whether
          you’re walking along the Thames, exploring museum corridors, or
          savoring afternoon tea in a quiet café. There’s always something new
          to discover in this timeless city.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default London;
