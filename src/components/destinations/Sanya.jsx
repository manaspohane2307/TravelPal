import React from "react";
import "../../styles/destinations/Sanya.css";
import sanyaImage from "../../assets/sanya.jpg"; // Make sure this image exists
import Footer from "../../components/Footer";

const Sanya = () => {
  return (
    <div className="sanya-container">
      <h1 className="sanya-heading">Sanya</h1>
      <p className="sanya-quote">
        “China’s tropical paradise—where the sea meets serenity and nature
        whispers luxury.”
      </p>

      <img src={sanyaImage} alt="Sanya Beach" className="sanya-image" />

      <div className="sanya-content">
        <h2>Sanya Travel Guide</h2>
        <p>
          Sanya, nestled on the southern tip of China's Hainan Island, is a
          tropical paradise famed for its pristine beaches, lush landscapes, and
          luxurious resorts. Often referred to as the "Hawaii of China," Sanya
          offers a blissful escape with its crystal-clear waters, vibrant coral
          reefs, and a myriad of outdoor adventures, making it a perfect retreat
          for sun-seekers, nature lovers, and anyone looking to unwind in a
          serene setting.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Yalong Bay:</strong> Known as the best beach in China, with
            soft white sand, water sports, and lush scenery.
          </li>
          <li>
            <strong>Tianya Haijiao:</strong> A coastal icon with scenic rock
            formations symbolizing “the ends of the earth.”
          </li>
          <li>
            <strong>Nanshan Temple:</strong> A serene Buddhist site featuring a
            108-meter Guanyin statue by the sea.
          </li>
          <li>
            <strong>Luhuitou Park:</strong> A romantic hilltop park offering
            panoramic views of Sanya’s coastline and sunsets.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Wuzhizhou Island:</strong> A haven for snorkeling and diving
            with vibrant marine life and clear waters.
          </li>
          <li>
            <strong>Sanya Bay:</strong> Known for long beach walks, palm-lined
            views, and stunning evening skies.
          </li>
          <li>
            <strong>The Atlantis Sanya:</strong> A family-friendly resort with
            an aquarium, waterpark, and luxurious stays.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Monkey Island:</strong> Interact with macaques in a natural
            reserve, accessed via an oversea cable car.
          </li>
          <li>
            <strong>Binglanggu Cultural Park:</strong> Explore traditions of the
            Li and Miao ethnic groups with performances and crafts.
          </li>
          <li>
            <strong>Baoting County:</strong> Enjoy mountain scenery, hot
            springs, and authentic local culture.
          </li>
        </ul>

        <h2>Accommodation</h2>
        <p>
          Sanya’s accommodation options range from beachfront luxury resorts to
          more affordable hotels along the coast. Resorts in Yalong Bay and
          Haitang Bay offer top-tier services, while Sanya Bay and Dadonghai
          Beach cater to budget-conscious travelers.
        </p>

        <h3>Recommended Hotels</h3>
        <ul>
          <li>
            <strong>Sanya Marriott Yalong Bay Resort & Spa</strong>
          </li>
          <li>
            <strong>Atlantis Sanya</strong>
          </li>
          <li>
            <strong>The Ritz-Carlton Sanya, Yalong Bay</strong>
          </li>
          <li>
            <strong>The Sanya Edition</strong>
          </li>
          <li>
            <strong>MGM Grand Sanya</strong>
          </li>
        </ul>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Sanya Phoenix International Airport
            connects to major cities and international hubs.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> November to April offers the
            most pleasant weather.
          </li>
          <li>
            <strong>Transportation:</strong> Taxis and resort shuttles are
            common; always confirm fares or use meters.
          </li>
          <li>
            <strong>Language & Currency:</strong> Mandarin is spoken; currency
            is the Chinese Yuan (CNY). Use translation apps if needed.
          </li>
          <li>
            <strong>Safety & Etiquette:</strong> Respect local customs,
            especially in nature preserves and religious areas.
          </li>
        </ul>

        <p>
          For more detailed travel information and insights into Sanya and other
          parts of China, visit the official China National Tourism
          Administration website:{" "}
          <a
            href="https://www.travelchina.org.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            China Travel
          </a>
          .
        </p>

        <h2>Map of Sanya</h2>
        <div className="sanya-map">
          <iframe
            title="Sanya Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30307.31403175562!2d109.4945313191783!3d18.248351274463804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x341f34665e4b9005%3A0x2cfb0aa99b5e86d4!2sSanya%2C%20Hainan%2C%20China!5e0!3m2!1sen!2sin!4v1719119000000!5m2!1sen!2sin"
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

export default Sanya;
