import React from "react";
import "../../styles/destinations/Rome.css";
import romeImage from "../../assets/rome.jpg"; // Make sure this image exists
import Footer from "../../components/Footer";

const Rome = () => {
  return (
    <div className="rome-container">
      <h1 className="rome-heading">Rome</h1>
      <p className="rome-quote">
        “All roads may lead to Rome, but what truly stays are the stories etched
        in its stones.”
      </p>

      <img src={romeImage} alt="Rome City" className="rome-image" />

      <div className="rome-content">
        <h2>Rome Travel Guide</h2>
        <p>
          Welcome to the Eternal City! Rome, the capital of Italy, is a
          sprawling, cosmopolitan city with nearly 3,000 years of globally
          influential art, architecture, and culture on display.
        </p>

        <h2>How to Get There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> Rome's Leonardo da Vinci–Fiumicino Airport
            (FCO) is the main international gateway to the city, located about
            35km west of Rome.
          </li>
          <li>
            <strong>By Train:</strong> Roma Termini is Rome's main railway
            station with daily connections across Italy and international
            destinations.
          </li>
          <li>
            <strong>By Road:</strong> Rome is linked with the rest of Italy by
            the Autostrada (motorway).
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <ul>
          <li>
            <strong>Spring (April to June):</strong> The weather is warm, and
            wildflowers are in bloom.
          </li>
          <li>
            <strong>Fall (September to October):</strong> The summer crowds have
            thinned out, and temperatures are cooler yet comfortable.
          </li>
        </ul>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Colosseum:</strong> A monumental three-tiered Roman
            amphitheater known for its gladiator tournaments.
          </li>
          <li>
            <strong>Roman Forum:</strong> Once the center of political,
            commercial, and judicial life in ancient Rome.
          </li>
          <li>
            <strong>Pantheon:</strong> A testament to Rome's architectural
            grandeur, originally built as a temple to all Roman gods.
          </li>
          <li>
            <strong>St. Peter’s Basilica:</strong> The world’s largest basilica,
            located within Vatican City.
          </li>
          <li>
            <strong>Vatican Museums:</strong> Home to priceless art and
            Michelangelo's breathtaking Sistine Chapel ceiling.
          </li>
        </ul>

        <h2>Museums and Cultural Sites</h2>
        <ul>
          <li>
            <strong>Capitoline Museums:</strong> The world's first museum, with
            classical sculptures and Renaissance art.
          </li>
          <li>
            <strong>Galleria Borghese:</strong> A museum with masterpieces by
            Raphael, Titian, and Caravaggio amid lush gardens.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <ul>
          <li>
            <strong>Pizzarium Bonci:</strong> Famous for pizza al
            taglio—Roman-style rectangular pizza sold by weight.
          </li>
          <li>
            <strong>Roscioli:</strong> A multi-concept deli, bakery, restaurant,
            and wine bar known for classic Roman pasta.
          </li>
          <li>
            <strong>Tazza d'Oro:</strong> Iconic coffee roaster near the
            Pantheon, perfect for espresso lovers.
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Pompeii and Naples:</strong> Explore the ancient ruins of
            Pompeii and the vibrant city of Naples.
          </li>
          <li>
            <strong>Florence:</strong> Renowned as the Cradle of the Renaissance
            and home to incredible art and architecture.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Opera at Teatro dell’Opera di Roma:</strong> Enjoy
            world-class opera performances in an elegant setting.
          </li>
          <li>
            <strong>Estate Romana Festival:</strong> A summer festival filled
            with music, film, theatre, and cultural events.
          </li>
        </ul>

        <h2>Map of Rome</h2>
        <div className="rome-map">
          <iframe
            title="Rome Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23815.160097701536!2d12.476830497879801!3d41.89332076990178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a34c6a63d5%3A0x8d69b7b2d2ecb437!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sin!4v1719115000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Rome, Italy's "Eternal City," allows you to walk through history while
          enjoying its vibrant street life, exceptional cuisine, and bustling
          piazzas. Don't forget to toss a coin in the Trevi Fountain and enjoy a
          scoop (or two) of gelato!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Rome;
