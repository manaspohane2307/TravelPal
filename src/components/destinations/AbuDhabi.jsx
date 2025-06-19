import React from "react";
import "../../styles/destinations/AbuDhabi.css";
import abuDhabiImage from "../../assets/abudhabi.jpg";
import Footer from "../../components/Footer";

const AbuDhabi = () => {
  return (
    <div className="abudhabi-container">
      <h1 className="abudhabi-heading">Abu Dhabi</h1>

      <p className="abudhabi-description">
        Discover the opulent charm and cultural richness of Abu Dhabi, the
        sparkling jewel of the United Arab Emirates.
      </p>

      <img
        src={abuDhabiImage}
        alt="Abu Dhabi"
        className="abudhabi-main-image"
      />

      <div className="abudhabi-content">
        <p>
          Known for its luxurious lifestyle, glittering skyline, pristine
          beaches, and a melange of cultural and contemporary attractions, this
          city beckons vacationers worldwide. This comprehensive guide will take
          you through the pearls of this Arabian wonder.
        </p>

        <h2>
          <strong>Top Attractions</strong>
        </h2>
        <ul>
          <li>
            <strong>Sheikh Zayed Grand Mosque:</strong> This magnificent white
            marble edifice, capable of holding over 40,000 worshippers, is a
            stunning blend of modern Islamic architecture and design.
          </li>
          <li>
            <strong>Louvre Abu Dhabi:</strong> A universal museum that displays
            global art under an iconic floating dome.
          </li>
          <li>
            <strong>Ferrari World:</strong> The world’s first Ferrari-branded
            theme park, home to the fastest roller coaster.
          </li>
          <li>
            <strong>Qasr Al Hosn:</strong> The oldest stone building in Abu
            Dhabi and a symbol of Emirati culture.
          </li>
        </ul>

        {/* Map immediately after Top Attractions */}
        <div className="abudhabi-map">
          <h2>Map of Top Attractions</h2>
          <iframe
            title="Abu Dhabi Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115774.63754038808!2d54.3377630632824!3d24.386300125170273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e667a1a74c0ef%3A0x63db33d17b51aef6!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1750392486272!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>
          <strong>Best Beaches</strong>
        </h2>
        <ul>
          <li>
            <strong>Saadiyat Public Beach:</strong> White sands, watersports,
            and dolphins just offshore.
          </li>
          <li>
            <strong>Corniche Beach:</strong> 8 km long beach with clear water,
            amenities, and family zones.
          </li>
        </ul>

        <h2>
          <strong>Cultural Experiences</strong>
        </h2>
        <ul>
          <li>
            <strong>Abu Dhabi Falcon Hospital:</strong> A unique guided
            experience with the UAE’s national bird.
          </li>
          <li>
            <strong>Traditional Souks:</strong> Wander through local markets for
            spices, gold, and handicrafts.
          </li>
        </ul>

        <h2>
          <strong>Day Trips</strong>
        </h2>
        <ul>
          <li>
            <strong>Rub’ al Khali:</strong> The "Empty Quarter", the world’s
            largest uninterrupted desert.
          </li>
          <li>
            <strong>Al Ain:</strong> Garden city with a zoo, UNESCO sites, and
            the Jebel Hafeet mountain.
          </li>
        </ul>

        <h2>
          <strong>Top Places to Dine</strong>
        </h2>
        <ul>
          <li>
            <strong>Emirates Palace:</strong> Try the iconic 24k gold camel
            burger in a royal setting.
          </li>
          <li>
            <strong>Byblos Sur Mer:</strong> Lebanese food with style at the
            InterContinental Hotel.
          </li>
          <li>
            <strong>Villa Toscana:</strong> Authentic Italian dining in the
            lavish St. Regis Abu Dhabi.
          </li>
          <li>
            <strong>Li Beirut:</strong> Upscale Lebanese with sea views in
            Etihad Towers.
          </li>
        </ul>

        <p>
          Embrace the city's contrast between the timeless tranquility of the
          desert and the bustling urban city life. From the awe-inspiring Sheikh
          Zayed Mosque to the thrilling rides at Ferrari World, there's no
          shortage of experiences in Abu Dhabi. Enjoy your journey to this
          bedazzling city of cultures!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AbuDhabi;
