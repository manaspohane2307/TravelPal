import React from "react";
import "../../styles/destinations/Minori.css";
import minoriImage from "../../assets/minori.webp"; // Replace with actual image path
import Footer from "../../components/Footer";

const Minori = () => {
  return (
    <div className="minori-container">
      <h1 className="minori-heading">Minori</h1>
      <p className="minori-subtitle">
        Minori is a picturesque coastal town located on the Amalfi Coast in
        Southern Italy. Known for its charm and tranquility, Minori offers
        visitors a relaxing getaway with stunning views of the Mediterranean
        Sea. The town is famous for its lemon groves, which produce delicious
        Limoncello liqueur, a local specialty.
      </p>

      <img
        src={minoriImage}
        alt="Minori Amalfi Coast"
        className="minori-image"
      />

      <div className="minori-content">
        <h2>Minori, Italy: A Hidden Gem Along the Amalfi Coast</h2>
        <p>
          Nestled on Italy's stunning Amalfi Coast, Minori is a captivating
          blend of historical riches, lush natural landscapes, and culinary
          excellence—making it an unmissable destination for any traveler. While
          less frequented than its famous neighbors like Positano and Amalfi,
          Minori offers an authentic slice of Italian life, marked by its
          laid-back atmosphere, scenic beauty, and cultural treasures.
        </p>

        <h2>Must-Visit Attractions in Minori</h2>
        <ul>
          <li>
            <strong>Villa Romana:</strong> A beautifully preserved Roman villa
            featuring ancient mosaics and frescoes from the 1st century AD.
          </li>
          <li>
            <strong>Minori's Beach:</strong> A tranquil beach known for its
            clear waters and relaxing vibe.
          </li>
          <li>
            <strong>Basilica di Santa Trofimena:</strong> A beautiful church
            holding sacred relics and classic 19th-century architecture.
          </li>
          <li>
            <strong>Sentiero dei Limoni (Path of Lemons):</strong> A panoramic
            trail connecting Minori and Maiori, surrounded by lemon groves and
            breathtaking sea views.
          </li>
        </ul>

        <h2>Dining and Culinary Experiences</h2>
        <ul>
          <li>
            <strong>Pasta Making Classes:</strong> Learn the art of handmade
            pasta from local chefs—an immersive and delicious experience.
          </li>
          <li>
            <strong>Ristorante Giardiniello:</strong> Savor regional flavors in
            a refined setting with classic Amalfitan dishes.
          </li>
          <li>
            <strong>Pasticceria Sal De Riso:</strong> Famous for its artistic
            pastries and limoncello-infused sweets.
          </li>
        </ul>

        <h2>Accommodation Recommendations</h2>
        <p>
          Choose from luxury sea-view hotels, quaint B&Bs, or historical inns.
          Staying in the old town or hillside offers the best atmosphere and
          views.
        </p>

        <h2>Best Time to Visit</h2>
        <p>
          Visit from late April to June or September to October for pleasant
          weather and fewer crowds than in peak summer.
        </p>

        <h2>Getting There</h2>
        <p>
          Fly into Naples International Airport, then continue via car, bus, or
          private transfer. Salerno is the closest major train station with bus
          and ferry options to Minori.
        </p>

        <h2>Map of Minori</h2>
        <div className="minori-map">
          <iframe
            title="Map of Minori"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.651937449899!2d14.635645315177837!3d40.64769397933996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9c2f5c2a3cfb%3A0x6a2f2c88e6f75c49!2s84010%20Minori%2C%20SA%2C%20Italy!5e0!3m2!1sen!2sin!4v1719070000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h2>Local Tips & Transportation</h2>
        <ul>
          <li>
            <strong>Ferries:</strong> Travel to nearby Amalfi Coast towns with
            scenic ferry rides.
          </li>
          <li>
            <strong>Festivals:</strong> Check local calendars for food festivals
            and religious celebrations.
          </li>
          <li>
            <strong>Local Transit:</strong> Buses and taxis are available, but
            walking is best for exploring Minori itself.
          </li>
        </ul>

        <p>
          Minori, though small, captivates the heart with its pristine beauty,
          rich history, and vibrant local culture. It's a place where every
          traveler can find something to love—from history enthusiasts and
          adventure seekers to food lovers and those simply seeking relaxation
          by the sea.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Minori;
