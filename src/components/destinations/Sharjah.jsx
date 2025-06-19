import React from "react";
import "../../styles/destinations/Sharjah.css";
import sharjahImage from "../../assets/sharjah.jpg"; // Make sure this image exists
import Footer from "../../components/Footer";

const Sharjah = () => {
  return (
    <div className="sharjah-container">
      <h1 className="sharjah-heading">Sharjah</h1>
      <p className="sharjah-quote">
        “Where heritage meets modernity—experience the cultural heart of the UAE
        in Sharjah.”
      </p>

      <img src={sharjahImage} alt="Sharjah" className="sharjah-image" />

      <div className="sharjah-content">
        <h2>Sharjah Travel Guide</h2>
        <p>
          Situated on the Arabian Gulf, Sharjah is the third largest city in the
          United Arab Emirates, known for its rich history and cultural
          heritage. Proclaimed the Cultural Capital of the Arab World by UNESCO,
          Sharjah offers a harmonious blend of traditional values and modern
          experiences.
        </p>

        <h2>Essential Information</h2>
        <ul>
          <li>
            <strong>Currency:</strong> United Arab Emirates dirham (AED)
          </li>
          <li>
            <strong>Language:</strong> Arabic (English widely spoken)
          </li>
          <li>
            <strong>Weather:</strong> Hot desert climate, cooler between
            November to March
          </li>
        </ul>

        <h2>Getting Around</h2>
        <p>
          Sharjah Public Transport (Mowasalat) offers local buses, taxis, and
          shuttle services. For flexibility, rent a car from popular services
          like Thrifty or Budget. Plan your itinerary with help from the
          official tourism website:{" "}
          <a
            href="https://www.visitsharjah.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Sharjah
          </a>
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Sharjah Museum of Islamic Civilization:</strong> A rich
            collection of Islamic artifacts, science, and art.{" "}
            <a
              href="https://www.sharjahmuseums.ae/en/our-museums/museum-of-islamic-civilization"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan your visit
            </a>
          </li>
          <li>
            <strong>Al Majaz Waterfront:</strong> Featuring musical fountains,
            cafes, playgrounds, and mini-golf.{" "}
            <a
              href="https://www.almajazwaterfront.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info
            </a>
          </li>
          <li>
            <strong>Sharjah Aquarium:</strong> Home to 150+ marine species from
            coral reefs to mangroves.{" "}
            <a
              href="https://www.sharjahaquarium.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit aquarium
            </a>
          </li>
        </ul>

        <h2>Natural Wonders</h2>
        <ul>
          <li>
            <strong>Kalba:</strong> A coastal town with bird sanctuaries,
            mangroves, and scenic beaches. Great for kayaking and wildlife
            spotting.
          </li>
          <li>
            <strong>Al Noor Island:</strong> Offers a Butterfly House,
            Literature Pavilion, and immersive sculptures amid lush greenery.
          </li>
        </ul>

        <h2>Shopping in Sharjah</h2>
        <ul>
          <li>
            <strong>Blue Souk (Central Market):</strong> Ideal for carpets,
            gold, textiles, and antiques.
          </li>
          <li>
            <strong>Heart of Sharjah:</strong> Heritage project with traditional
            shops and cultural attractions.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <ul>
          <li>
            <strong>Pulman Sharjah:</strong> Luxury hotel with lagoon views,
            spa, and exceptional dining.
          </li>
          <li>
            <strong>The Chedi Al Bait, Sharjah:</strong> A 5-star heritage stay
            in restored historic homes.
          </li>
        </ul>

        <h2>Gastronomic Highlights</h2>
        <ul>
          <li>
            <strong>Al Qubtan:</strong> Excellent seafood by the shore.
          </li>
          <li>
            <strong>Al Fanar Restaurant:</strong> Authentic Emirati cuisine in a
            charming traditional setting.
          </li>
        </ul>

        <h2>Safety and Etiquette</h2>
        <p>
          Sharjah is a dry emirate—alcohol is not sold or consumed publicly.
          Dress modestly and respect Islamic customs. It's one of the safest
          cities for tourists in the region.
        </p>

        <h2>Map of Sharjah</h2>
        <div className="sharjah-map">
          <iframe
            title="Sharjah Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.296713324058!2d55.39593501500863!3d25.346255483832583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc73b71cf91%3A0xf53a6ae4aa12a0ea!2sSharjah!5e0!3m2!1sen!2sin!4v1719120000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Whether you're a culture connoisseur, nature enthusiast, or simply
          curious to explore the Emirates beyond Dubai, Sharjah awaits with an
          enriching experience steeped in art, history, and hospitality.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Sharjah;
