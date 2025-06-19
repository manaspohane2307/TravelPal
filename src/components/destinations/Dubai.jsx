import React from "react";
import "../../styles/destinations/Dubai.css";
import dubaiImage from "../../assets/dubai.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Dubai = () => {
  return (
    <div className="dubai-container">
      <h1 className="dubai-heading">Dubai</h1>

      <p className="dubai-tagline">
        With world-class dining, entertainment, and hotels, Dubai is a city of
        contrasts where the modern and the traditional collide.
      </p>

      <img src={dubaiImage} alt="Dubai Skyline" className="dubai-main-image" />

      <div className="dubai-content">
        <h2>Dubai Travel Guide</h2>
        <p>
          Welcome to Dubai, a global city known for its extravagant
          architecture, luxury shopping, and vibrant nightlife. With world-class
          dining, entertainment, and hotels, Dubai is a city of contrasts where
          the modern and the traditional collide.
        </p>

        <h2>How to Get There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> Dubai International Airport (DXB) is one of
            the busiest airports in the world.
          </li>
          <li>
            <strong>By Road:</strong> Dubai is connected via a well-maintained
            highway network to nearby emirates and countries.
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <p>
          November to April is the ideal time to explore Dubai’s outdoor
          attractions, including festivals like DSF and DSS.
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Burj Khalifa:</strong> The tallest building on earth
            offering stunning skyline views.
          </li>
          <li>
            <strong>The Dubai Mall:</strong> Massive shopping and entertainment
            complex with an aquarium and dancing fountains.
          </li>
          <li>
            <strong>Palm Jumeirah:</strong> Man-made island with luxury resorts
            and the famous Aquaventure waterpark.
          </li>
          <li>
            <strong>Dubai Marina:</strong> Modern waterfront lined with cafes
            and beaches like JBR.
          </li>
          <li>
            <strong>Jumeirah Mosque:</strong> A stunning mosque open to
            non-Muslim visitors for cultural exchange.
          </li>
        </ul>

        <h2>Museums and Cultural Sites</h2>
        <ul>
          <li>
            <strong>Dubai Museum:</strong> Located in Al Fahidi Fort, it
            showcases Dubai’s transformation over time.
          </li>
          <li>
            <strong>Dubai Opera:</strong> Premier venue for music, dance, and
            theatrical performances.
          </li>
          <li>
            <strong>Alserkal Avenue:</strong> Art galleries and creative spaces
            supporting contemporary Middle Eastern artists.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <ul>
          <li>
            <strong>Pierchic:</strong> An upscale seafood restaurant with
            overwater dining views.
          </li>
          <li>
            <strong>Eauzone:</strong> Serves modern Asian cuisine in a stylish
            beachfront setting.
          </li>
          <li>
            <strong>Al Mallah:</strong> A budget-friendly spot for delicious
            shawarma and juices.
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Abu Dhabi:</strong> Visit the majestic Sheikh Zayed Grand
            Mosque and Louvre Abu Dhabi.
          </li>
          <li>
            <strong>Hatta:</strong> Mountain town great for hiking, kayaking,
            and exploring heritage villages.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Dubai Shopping Festival:</strong> Shopping, concerts,
            raffles, and fireworks throughout the city.
          </li>
          <li>
            <strong>Dubai International Film Festival:</strong> Showcasing local
            and international cinema.
          </li>
        </ul>

        <div className="dubai-map">
          <h2>Map of Dubai</h2>
          <iframe
            title="Dubai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115801.62423712858!2d55.20009699429332!3d25.113215037326227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43467baaa0ed%3A0x1e13ed730fbd9434!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1718910000001!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p>
          Your Dubai experience promises opulence, adventure, and rich
          culture—from desert safaris and historic souks to futuristic skylines
          and sea cruises. Be sure to dress modestly and respect local customs
          when visiting cultural sites.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Dubai;
