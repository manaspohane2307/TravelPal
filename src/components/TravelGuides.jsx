import React, { useState } from "react";
import "../styles/TravelGuides.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Image imports
import abudhabiImg from "../assets/abudhabi.jpg";
import austinImg from "../assets/austin.jpg";
import bangkokImg from "../assets/bangkok.jpg";
import barcelonaImg from "../assets/barcelona.jpg";
import cabosanlucasImg from "../assets/cabosanlucas.jpg";
import cancumImg from "../assets/cancum.jpg";
import comoImg from "../assets/como.jpg";
import dubaiImg from "../assets/dubai.jpg";
import goaImg from "../assets/goa.jpg";
import hamburgImg from "../assets/hamburg.jpg";
import ibizaImg from "../assets/ibiza.jpg";
import lasvegasImg from "../assets/lasvegas.jpg";
import londonImg from "../assets/london.jpg";
import madridImg from "../assets/madrid.jpg";
import marrakechImg from "../assets/marrakech.jpg";
import mauiImg from "../assets/maui.jpg";
import miamiImg from "../assets/miami.jpg";
import milanImg from "../assets/milan.jpg";
import minoriImg from "../assets/minori.webp";
import moritzImg from "../assets/moritz.jpg";
import munichImg from "../assets/munich.jpg";
import newyorkImg from "../assets/newyork.jpg";
import parisImg from "../assets/paris.jpg";
import reykjavikImg from "../assets/reykjavik.webp";
import riyadhImg from "../assets/riyadh.jpeg";
import romeImg from "../assets/rome.jpg";
import sanyaImg from "../assets/sanya.jpg";
import sharjahImg from "../assets/sharjah.jpg";
import tokyoImg from "../assets/tokyo.jpg";
import tulumImg from "../assets/tulum.jpg";
import veniceImg from "../assets/venice.jpg";
import viennaImg from "../assets/vienna.jpg";

// Destination list
const destinations = [
  { city: "Abu Dhabi", country: "UAE", image: abudhabiImg, path: "/abudhabi" },
  { city: "Austin", country: "USA", image: austinImg, path: "/austin" },
  { city: "Bangkok", country: "Thailand", image: bangkokImg, path: "/bangkok" },
  {
    city: "Barcelona",
    country: "Spain",
    image: barcelonaImg,
    path: "/barcelona",
  },
  {
    city: "Cabo San Lucas",
    country: "Mexico",
    image: cabosanlucasImg,
    path: "/cabosanlucas",
  },
  { city: "Cancum", country: "Mexico", image: cancumImg, path: "/cancum" },
  { city: "Como", country: "Italy", image: comoImg, path: "/como" },
  { city: "Dubai", country: "UAE", image: dubaiImg, path: "/dubai" },
  { city: "Goa", country: "India", image: goaImg, path: "/goa" },
  { city: "Hamburg", country: "Germany", image: hamburgImg, path: "/hamburg" },
  { city: "Ibiza", country: "Spain", image: ibizaImg, path: "/ibiza" },
  { city: "Las Vegas", country: "USA", image: lasvegasImg, path: "/lasvegas" },
  { city: "London", country: "UK", image: londonImg, path: "/london" },
  { city: "Madrid", country: "Spain", image: madridImg, path: "/madrid" },
  {
    city: "Marrakech",
    country: "Morocco",
    image: marrakechImg,
    path: "/marrakech",
  },
  { city: "Maui", country: "USA", image: mauiImg, path: "/maui" },
  { city: "Miami", country: "USA", image: miamiImg, path: "/miami" },
  { city: "Milan", country: "Italy", image: milanImg, path: "/milan" },
  { city: "Minori", country: "Italy", image: minoriImg, path: "/minori" },
  { city: "Moritz", country: "Switzerland", image: moritzImg, path: "/moritz" },
  { city: "Munich", country: "Germany", image: munichImg, path: "/munich" },
  { city: "New York", country: "USA", image: newyorkImg, path: "/newyork" },
  { city: "Paris", country: "France", image: parisImg, path: "/paris" },
  {
    city: "Reykjavik",
    country: "Iceland",
    image: reykjavikImg,
    path: "/reykjavik",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    image: riyadhImg,
    path: "/riyadh",
  },
  { city: "Rome", country: "Italy", image: romeImg, path: "/rome" },
  { city: "Sanya", country: "China", image: sanyaImg, path: "/sanya" },
  { city: "Sharjah", country: "UAE", image: sharjahImg, path: "/sharjah" },
  { city: "Tokyo", country: "Japan", image: tokyoImg, path: "/tokyo" },
  { city: "Tulum", country: "Mexico", image: tulumImg, path: "/tulum" },
  { city: "Venice", country: "Italy", image: veniceImg, path: "/venice" },
  { city: "Vienna", country: "Austria", image: viennaImg, path: "/vienna" },
];

const TravelGuides = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = destinations.filter((item) =>
    `${item.city} ${item.country}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="travel-guides-container">
      <h1 className="guide-heading">🌍 Discover Your Next Destination</h1>
      <p className="guide-subtitle">
        ✈️ Tailored travel guides to inspire your journey
      </p>

      <input
        type="text"
        className="destination-search"
        placeholder="🔍 Search your destination..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-grid">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <Link to={item.path} key={index} className="destination-card">
              <div className="card-image">
                <img src={item.image} alt={item.city} />
              </div>
              <div className="card-text">
                <h2>{item.city}</h2>
                <p>{item.country}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results">😕 No destinations found.</p>
        )}
      </div>

      <p className="final-call">
        🌟 Let your heart guide the way — search, explore, and enjoy the
        journey!
      </p>

      <Footer />
    </div>
  );
};

export default TravelGuides;
