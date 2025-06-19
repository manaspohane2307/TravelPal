import React from "react";
import "../../styles/destinations/LasVegas.css";
import lasVegasImage from "../../assets/lasvegas.jpg"; // Ensure the image exists
import Footer from "../../components/Footer";

const LasVegas = () => {
  return (
    <div className="lasvegas-container">
      <h1 className="lasvegas-heading">Las Vegas</h1>
      <p className="lasvegas-quote">
        "Las Vegas is the only place I know where money really talks – it says,
        'Goodbye.'" – Frank Sinatra
      </p>

      <img
        src={lasVegasImage}
        alt="Las Vegas Strip"
        className="lasvegas-main-image"
      />

      <div className="lasvegas-content">
        <h2>Las Vegas Travel Guide</h2>
        <p>
          Las Vegas, known as the Entertainment Capital of the World, is a
          destination that defies comparison with its dazzling array of
          attractions, shows, and culinary delights. Whether you're looking for
          thrilling rides, world-renowned performances, or just a bit of luck at
          the casino, Vegas welcomes all to its vibrant neon embrace.
        </p>

        <h2>Must-See Attractions</h2>
        <ul>
          <li>
            <strong>The Strip:</strong> Iconic landmarks like the Bellagio
            Fountains and the Eiffel Tower replica make this 4.2-mile stretch a
            non-stop entertainment corridor.
          </li>
          <li>
            <strong>Fremont Street Experience:</strong> Enjoy vintage Vegas with
            an LED canopy light show and live music in this revitalized downtown
            area.
          </li>
          <li>
            <strong>High Roller:</strong> The world’s tallest observation wheel
            offers unbeatable city views from The LINQ.
          </li>
          <li>
            <strong>Live Entertainment:</strong> From Cirque du Soleil to Elton
            John, Las Vegas hosts some of the world's best shows.
          </li>
        </ul>

        <h2>Culinary Adventures</h2>
        <ul>
          <li>
            <strong>Joël Robuchon:</strong> Indulge in refined French cuisine
            inside the MGM Grand.
          </li>
          <li>
            <strong>Gordon Ramsay Hell's Kitchen:</strong> A high-energy dining
            experience right from the famous TV show at Caesars Palace.
          </li>
        </ul>

        <h2>Rejuvenation and Leisure</h2>
        <ul>
          <li>
            <strong>The Spa at ARIA:</strong> Relax and restore with
            personalized treatments in a tranquil setting.
          </li>
          <li>
            <strong>Canyon Ranch SpaClub:</strong> Nestled within The Venetian
            and The Palazzo, it’s a wellness retreat amid the city buzz.
          </li>
        </ul>

        <h2>Beyond the Neon Lights</h2>
        <ul>
          <li>
            <strong>Grand Canyon:</strong> Book a tour or drive to one of
            nature's most magnificent wonders.
          </li>
          <li>
            <strong>Red Rock Canyon:</strong> A paradise for hiking, climbing,
            or simply taking in desert views.
          </li>
          <li>
            <strong>Hoover Dam:</strong> A short trip brings you to this massive
            feat of engineering on the Colorado River.
          </li>
        </ul>

        <h2>Shopping in Style</h2>
        <ul>
          <li>
            <strong>The Shops at Crystals:</strong> Explore luxury fashion and
            cutting-edge architecture in this premium mall.
          </li>
          <li>
            <strong>The Forum Shops at Caesars:</strong> A unique shopping
            experience blending top brands and Roman-inspired interiors.
          </li>
        </ul>

        <h2>Map of Las Vegas</h2>
        <div className="lasvegas-map">
          <iframe
            title="Map of Las Vegas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13239.014296139507!2d-115.1728133!3d36.1146465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c438274dce69%3A0x9021734e0a718541!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1718999999999!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p>
          Las Vegas is a city that constantly reinvents itself. Whether you're
          spinning the roulette wheel or enjoying the serenity of a world-class
          spa, there's never a dull moment in this oasis of indulgence. Plan
          your trip and experience a destination that truly never sleeps.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default LasVegas;
