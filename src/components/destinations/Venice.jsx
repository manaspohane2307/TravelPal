import React from "react";
import "../../styles/destinations/Venice.css";
import veniceImage from "../../assets/venice.jpg"; // Use .webp if available
import Footer from "../../components/Footer";

const Venice = () => {
  return (
    <div className="venice-container">
      <h1 className="venice-heading">Venice</h1>
      <p className="venice-quote">
        “A city of bridges, beauty, and timeless romance.”
      </p>

      <img
        src={veniceImage}
        alt="Venice Grand Canal"
        className="venice-image"
      />

      <div className="venice-content">
        <h2>Venice Travel Guide</h2>
        <p>
          Welcome to Venice, a captivating city built on water. An intricate
          network of canals and bridges, grand squares, and resplendent palaces
          mark the landscape of Italy's magical floating city.
        </p>

        <h2>How to Get There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> Marco Polo Airport (VCE), 13km from Venice.
          </li>
          <li>
            <strong>By Train:</strong> Stazione di Venezia Santa Lucia connects
            to major cities.
          </li>
          <li>
            <strong>By Road:</strong> Cars aren’t allowed in Venice proper; park
            outside and take a vaporetto (water bus) or water taxi.
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <ul>
          <li>
            <strong>Spring (Apr–Jun):</strong> Pleasant weather, fewer crowds.
          </li>
          <li>
            <strong>Fall (Sep–Nov):</strong> Cool temperatures and quieter
            streets.
          </li>
        </ul>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Piazza San Marco:</strong> Venice’s heart featuring St.
            Mark’s Basilica and Doge’s Palace.
          </li>
          <li>
            <strong>St. Mark's Basilica:</strong> Stunning cathedral with
            glittering mosaics and domes.
          </li>
          <li>
            <strong>Doge’s Palace:</strong> Explore history, gothic
            architecture, and secret passages.
          </li>
          <li>
            <strong>Rialto Bridge:</strong> One of Venice’s oldest and most
            iconic structures.
          </li>
          <li>
            <strong>Murano & Burano:</strong> Colorful islands famous for glass
            and lace.
          </li>
        </ul>

        <h2>Museums and Culture</h2>
        <ul>
          <li>
            <strong>Gallerie dell’Accademia:</strong> Classical Venetian art.
          </li>
          <li>
            <strong>Peggy Guggenheim Collection:</strong> Modern art from
            Picasso, Dalí, and Pollock.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <ul>
          <li>
            <strong>Ristorante Quadri:</strong> Michelin-star dining in St.
            Mark’s Square.
          </li>
          <li>
            <strong>Cantina Do Mori:</strong> Venice’s oldest wine bar offering
            cicchetti and local wines.
          </li>
          <li>
            <strong>Da Ivo:</strong> Upscale restaurant popular with
            celebrities.
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Padua:</strong> A scholarly city rich in art and
            architecture.
          </li>
          <li>
            <strong>Veneto Wine Region:</strong> Sip Prosecco and explore rustic
            vineyards.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Venice Carnival:</strong> Iconic masked festival steeped in
            history.
          </li>
          <li>
            <strong>Venice Film Festival:</strong> Premier showcase of
            international cinema.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <ul>
          <li>
            <strong>Aman Venice:</strong> Lavish hotel in a 16th-century
            palazzo.
          </li>
          <li>
            <strong>Hotel Antiche Figure:</strong> Affordable comfort near the
            train station.
          </li>
          <li>
            <strong>Camping Serenissima:</strong> Budget-friendly and cheerful.
          </li>
          <li>
            <strong>Hotel Metropole:</strong> Lagoon views, luxury, and art deco
            styling.
          </li>
          <li>
            <strong>The Gritti Palace:</strong> Grand Canal luxury with classic
            charm.
          </li>
        </ul>

        <p>
          Venice, with its dreamy waterways and architectural gems, provides a
          unique and unforgettable experience. Whether it be a gondola ride
          under the Bridge of Sighs, savoring gelato in a picturesque square, or
          finding your way around the labyrinthine backstreets—this floating
          city enchants at every turn.
        </p>

        <h2>Map of Venice</h2>
        <div className="venice-map">
          <iframe
            title="Venice Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44726.06508628883!2d12.287784877490484!3d45.4343360450969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d709a02113%3A0x2b465d6182f421d4!2sVenice%2C%20Metropolitan%20City%20of%20Venice%2C%20Italy!5e0!3m2!1sen!2sin!4v1719212121212!5m2!1sen!2sin"
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

export default Venice;
