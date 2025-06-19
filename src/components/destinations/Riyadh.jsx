import React from "react";
import "../../styles/destinations/Riyadh.css";
import riyadhImage from "../../assets/riyadh.jpeg"; // Ensure this image exists in your assets folder
import Footer from "../../components/Footer";

const Riyadh = () => {
  return (
    <div className="riyadh-container">
      <h1 className="riyadh-heading">Riyadh</h1>
      <p className="riyadh-quote">
        “Embark on a grand adventure to Riyadh, where ancient fortresses and
        futuristic towers stand side by side in the Arabian desert.”
      </p>

      <img src={riyadhImage} alt="Riyadh City" className="riyadh-image" />

      <div className="riyadh-content">
        <h2>Riyadh Travel Guide</h2>
        <p>
          Welcome to Riyadh, the capital and main financial hub of Saudi Arabia.
          This cosmopolitan city is a mesmerizing blend of old and new, where
          dusty archaeological sites and traditional souks exist alongside
          gleaming skyscrapers and contemporary lifestyle destinations.
        </p>

        <h2>How to Get There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> King Khalid International Airport (RUH)
            serves as the main gateway to the city and lies about 35 km north of
            Riyadh.
          </li>
          <li>
            <strong>By Road:</strong> Riyadh is accessible via a robust highway
            system connecting it to major cities across Saudi Arabia and
            neighboring countries.
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <p>
          The ideal time to visit Riyadh is from November to March, when
          temperatures are cooler and suitable for outdoor sightseeing and
          exploration.
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Al-Masmak Fortress:</strong> A clay and mud-brick fort,
            pivotal in Riyadh’s unification, now houses a museum depicting its
            history.
          </li>
          <li>
            <strong>Kingdom Centre Tower:</strong> The 99th-floor Sky Bridge
            offers panoramic city views from one of Riyadh’s tallest buildings.
          </li>
          <li>
            <strong>National Museum:</strong> A state-of-the-art facility
            showcasing Saudi Arabia's history, Islamic heritage, and
            archaeological treasures.
          </li>
          <li>
            <strong>Diriyah:</strong> A restored heritage town, home to the
            UNESCO-listed At-Turaif District and the birthplace of the first
            Saudi state.
          </li>
          <li>
            <strong>King Abdulaziz Historical Center:</strong> Includes a
            museum, a library, gardens, and a hall dedicated to the founder of
            modern Saudi Arabia.
          </li>
        </ul>

        <h2>Museums and Cultural Sites</h2>
        <ul>
          <li>
            <strong>Salwa Palace:</strong> Located in Diriyah, it offers an
            immersive journey into early Saudi life and architecture.
          </li>
          <li>
            <strong>Naila Art Gallery:</strong> A premier contemporary art
            gallery showcasing Saudi and international works in a variety of
            media.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <ul>
          <li>
            <strong>Al-Najdiyah Village Restaurant:</strong> Dive into authentic
            Saudi dishes like Kabsa in a traditional setting.
          </li>
          <li>
            <strong>Nozomi:</strong> Upscale Japanese cuisine and sushi in a
            stylish ambiance.
          </li>
          <li>
            <strong>The Globe:</strong> Located in the glass sphere atop
            Al-Faisaliah Tower, it's a fine-dining experience with panoramic
            views.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Riyadh Season:</strong> A dynamic festival offering
            entertainment, concerts, exhibitions, and cultural programs
            city-wide.
          </li>
          <li>
            <strong>Janoob Al-Riyadh Music Festival:</strong> Celebrates
            instrumental acoustic music with performances from local and
            international artists.
          </li>
        </ul>

        <h2>Map of Riyadh</h2>
        <div className="riyadh-map">
          <iframe
            title="Riyadh Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362532.4248429017!2d46.35767681200412!3d24.7253985597164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038a373f3193%3A0x34d91e2f4b28db8b!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1719114445000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Visiting Riyadh provides a peek into Saudi Arabia's cultural heart and
          offers a perfect mix of history, culture, shopping, and dining
          experiences. As part of Saudi Vision 2030, the city is rapidly
          evolving and becoming more accessible to global travelers.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Riyadh;
