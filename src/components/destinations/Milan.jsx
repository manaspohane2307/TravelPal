import React from "react";
import "../../styles/destinations/Milan.css";
import milanImage from "../../assets/milan.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Milan = () => {
  return (
    <div className="milan-container">
      <h1 className="milan-heading">Milan</h1>
      <p className="milan-subtitle">
        Milan is a dynamic blend of high fashion, historic architecture, and
        vibrant culture, making it an irresistible destination for travelers
        seeking sophistication and charm.
      </p>

      <img src={milanImage} alt="Milan cityscape" className="milan-image" />

      <div className="milan-content">
        <h2>Milan Travel Guide</h2>
        <p>
          Milan, Italy's fashion capital, blends historical charm with modern
          sophistication, making it a must-visit destination for art lovers,
          fashion enthusiasts, and foodies alike. From its world-class museums
          and stunning architecture to its vibrant dining scene, there's
          something for everyone in Milan.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Duomo di Milano:</strong> A breathtaking Gothic cathedral
            with stunning rooftop views and intricate details.
          </li>
          <li>
            <strong>The Last Supper:</strong> Leonardo da Vinci’s iconic mural,
            located in Santa Maria delle Grazie. Booking ahead is essential.
          </li>
          <li>
            <strong>Galleria Vittorio Emanuele II:</strong> One of the world’s
            oldest shopping malls with stunning glass and iron architecture.
          </li>
          <li>
            <strong>Navigli District:</strong> Known for its canals, bars, and
            Milanese aperitivo culture. A lively and charming evening spot.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Castello Sforzesco:</strong> A vast fortress and museum
            complex featuring works by Michelangelo and Da Vinci.
          </li>
          <li>
            <strong>Brera District:</strong> A cultural hotspot filled with
            galleries, boutiques, and cozy cafes. Don’t miss the Pinacoteca di
            Brera.
          </li>
          <li>
            <strong>San Siro Stadium:</strong> A must-see for football fans.
            Home to both AC Milan and Inter Milan.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Lake Como:</strong> A luxurious lakeside retreat an hour
            from Milan, famous for villas and scenic towns like Bellagio.
          </li>
          <li>
            <strong>Bergamo:</strong> Explore the charming Città Alta and modern
            Città Bassa, both steeped in beauty and history.
          </li>
        </ul>

        <h2>Map of Milan</h2>
        <div className="milan-map">
          <iframe
            title="Map of Milan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88920.65810644502!2d9.07801119607024!3d45.4628328244047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a1e2cb3ae3%3A0x205ab0b10c73145d!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sin!4v1719069999999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h2>Accommodation Tips</h2>
        <p>
          From 5-star hotels in the city center to boutique stays in Brera and
          Navigli, Milan offers accommodations for all tastes and budgets.
          Whether you prefer central convenience or a more authentic local feel,
          there’s something for you.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Milan is served by Malpensa (MXP)
            and Linate (LIN) airports. Trains and buses connect to all major
            cities in Italy and beyond.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> Spring (April–June) and Fall
            (September–October) offer great weather and fewer crowds.
          </li>
          <li>
            <strong>Public Transport:</strong> The ATM network includes metro,
            buses, and trams. Grab a MilanoCard for convenience and savings.
          </li>
          <li>
            <strong>Language & Currency:</strong> Italian is spoken; Euro (€) is
            the official currency.
          </li>
          <li>
            <strong>Etiquette:</strong> Dress appropriately in churches, and
            always greet with “Buongiorno” or “Buonasera”.
          </li>
        </ul>

        <p>
          For more details, visit the official Italian tourism site:{" "}
          <a
            href="http://www.italia.it/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Italia.it
          </a>
        </p>

        <p>
          Whether you're drawn by fashion, fascinated by art, or simply looking
          to enjoy good food and architecture, Milan has something for everyone.
          Discover a city where tradition and innovation walk hand in hand.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Milan;
