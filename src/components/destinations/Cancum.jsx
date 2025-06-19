import React from "react";
import "../../styles/destinations/Cancum.css";
import cancumImage from "../../assets/cancum.jpg"; // Make sure to add the correct image file
import Footer from "../../components/Footer";

const Cancum = () => {
  return (
    <div className="cancum-container">
      <h1 className="cancum-heading">Cancum</h1>

      <p className="cancum-quote">
        Cancum, a dazzling gem on the Yucatán Peninsula, offers an exhilarating
        mix of pristine beaches, ancient Mayan ruins, and a vibrant nightlife.
      </p>

      <img src={cancumImage} alt="Cancum" className="cancum-main-image" />

      <div className="cancum-content">
        <h2>Cancum Travel Guide</h2>
        <p>
          Get ready to discover Cancum, an enticing destination that combines
          warm white sand beaches, crystal clear waters and historic sites that
          have fascinated travelers for decades.
        </p>

        <h2>How to Get to Cancum</h2>
        <p>
          Cancum International Airport offers daily flights from major global
          cities. Local transport from the airport includes taxis, hotel
          shuttles, and rentals for convenient access to the city.
        </p>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Zona Hotelera:</strong> Cancum’s famous beachfront strip
            filled with resorts, clubs, shops, and restaurants.
          </li>
          <li>
            <strong>Downtown Cancum (El Centro):</strong> Experience authentic
            Mexican food, markets, and local life.
          </li>
          <li>
            <strong>La Isla Shopping Village:</strong> Luxury shopping by the
            water with dining and aquarium access.
          </li>
          <li>
            <strong>Puerto Morelos:</strong> Relaxed fishing village ideal for
            snorkeling and reef diving.
          </li>
        </ul>

        <h2>Hotel Recommendations</h2>
        <ul>
          <li>
            <strong>Kempinski Hotel:</strong> Sea view rooms, gourmet food, and
            serene spa experiences.
          </li>
          <li>
            <strong>Le Blanc Spa Resort:</strong> Adults-only luxury with fine
            dining and exclusive amenities.
          </li>
          <li>
            <strong>Hyatt Ziva Cancum:</strong> Family-friendly resort with
            multiple pools and rooftop bar.
          </li>
          <li>
            <strong>Nizuc Resort and Spa:</strong> Private pools, tropical
            gardens, and six elegant restaurants.
          </li>
          <li>
            <strong>Temptation Cancum Resort:</strong> Lively adults-only escape
            with premium party vibes.
          </li>
        </ul>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Chichén Itzá:</strong> Majestic Mayan ruins and UNESCO
            heritage site just hours from Cancum.
          </li>
          <li>
            <strong>Isla Mujeres:</strong> Beautiful island with beaches,
            snorkeling, and artisan shopping.
          </li>
          <li>
            <strong>Coba:</strong> Climb Nohoch Mul pyramid and explore ancient
            jungle ruins.
          </li>
          <li>
            <strong>Xcaret Park:</strong> A cultural eco-park offering shows,
            river floats, and wildlife exhibits.
          </li>
          <li>
            <strong>Cancum Underwater Museum:</strong> Dive or snorkel among 500
            submerged sculptures.
          </li>
        </ul>

        <div className="cancum-map">
          <h2>Map of Cancum</h2>
          <iframe
            title="Cancum Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.530380594336!2d-86.8500471247571!3d21.16190708381409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b3a07f282f3%3A0xa3dc741676ec55aa!2sCanc%C3%BAn%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sin!4v1750488700000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>Cuisine and Nightlife</h2>
        <p>
          Cancum’s culinary scene blends authentic Yucatecan flavors with
          international fusion. Enjoy La Habichuela’s local fare or El Fish
          Fritanga’s seafood. At night, head to Coco Bongo or Mandala for
          entertainment-packed evenings.
        </p>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Tulum:</strong> Mayan ruins overlooking the Caribbean.
          </li>
          <li>
            <strong>Sian Ka'an Biosphere:</strong> A UNESCO natural reserve
            perfect for eco-tourism.
          </li>
          <li>
            <strong>Playa Del Carmen:</strong> A lively town known for its
            beaches and shopping.
          </li>
        </ul>

        <h2>Shopping in Cancum</h2>
        <p>
          From upscale malls like La Isla to local favorites like Mercado 28,
          Cancum caters to all shoppers with handcrafts, textiles, and designer
          goods.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Best Time to Visit:</strong> December to April is ideal;
            off-season offers fewer crowds.
          </li>
          <li>
            <strong>Transportation:</strong> Buses, taxis, or rental cars are
            easily available.
          </li>
          <li>
            <strong>Health & Safety:</strong> Stay hydrated, use sun protection,
            and be cautious at night.
          </li>
          <li>
            <strong>Currency & Language:</strong> Mexican Peso (MXN); English is
            common in tourist areas.
          </li>
        </ul>

        <p>
          For more, visit{" "}
          <a
            href="https://www.visitmexico.com/en/main-destinations/quintana-roo/cancun"
            target="_blank"
            rel="noreferrer"
          >
            Visit Mexico – Cancum
          </a>
          .
        </p>

        <p>
          Whether you're sunbathing, swimming with marine life, exploring ruins,
          or enjoying nightlife, Cancum has something magical for every
          traveler.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Cancum;
