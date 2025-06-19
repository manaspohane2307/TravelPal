import React from "react";
import "../../styles/destinations/Tulum.css";
import tulumImage from "../../assets/tulum.jpg"; // Use .webp version if available
import Footer from "../../components/Footer";

const Tulum = () => {
  return (
    <div className="tulum-container">
      <h1 className="tulum-heading">Tulum</h1>
      <p className="tulum-tagline">
        “Where ancient ruins meet turquoise shores and jungle serenity.”
      </p>

      <img
        src={tulumImage}
        alt="Tulum Beach and Ruins"
        className="tulum-image"
      />

      <div className="tulum-content">
        <h2>Travel Guide: Tulum, Mexico</h2>
        <p>
          Tulum, nestled along Mexico's stunning Yucatán Peninsula, possesses a
          distinctive blend of serenity and adventure. With white sand beaches,
          turquoise waters, lush jungles, and ancient ruins perched over the
          Caribbean, it’s the perfect mix of nature, culture, and relaxation.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Tulum Ruins:</strong> Cliffside Mayan city overlooking the
            sea – scenic and historic.
          </li>
          <li>
            <strong>Sian Ka’an Biosphere Reserve:</strong> UNESCO site with
            mangroves, dolphins, turtles & kayaking tours.
          </li>
          <li>
            <strong>Cenotes:</strong> Dive into Gran Cenote, Dos Ojos, or Cenote
            Calavera – natural underground pools.
          </li>
          <li>
            <strong>Beaches:</strong> Playa Paraíso offers breathtaking views
            and relaxing vibes.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Tulum Beach Zone:</strong> Eco-luxury resorts, boutiques,
            and beach clubs.
          </li>
          <li>
            <strong>Aldea Zama:</strong> Centrally located with upscale
            accommodations and quiet atmosphere.
          </li>
          <li>
            <strong>Tulum Pueblo:</strong> Budget-friendly, authentic dining,
            street art, and nightlife.
          </li>
          <li>
            <strong>Coba Ruins:</strong> Ancient pyramid site still open for
            climbing and less crowded than Tulum.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <ul>
          <li>
            <strong>Mi Amor Colibri Boutique Hotel</strong> – Romantic
            adults-only hideaway on the sea.
          </li>
          <li>
            <strong>Nomade Tulum</strong> – Wellness-focused beachfront resort
            with yoga & healing rituals.
          </li>
          <li>
            <strong>Hotel Bardo</strong> – Stylish luxury villas with pools and
            jungle views.
          </li>
          <li>
            <strong>Alaya Tulum</strong> – Eco-luxury meets boho beachside
            living.
          </li>
          <li>
            <strong>The Ginger</strong> – Affordable and well-rated local hotel.
          </li>
        </ul>

        <h2>Dining Recommendations</h2>
        <ul>
          <li>
            <strong>Hartwood:</strong> Open-fire cuisine made with local
            ingredients.
          </li>
          <li>
            <strong>Murmur Tulum:</strong> A creative menu blending local and
            international influences.
          </li>
          <li>
            <strong>Arca:</strong> Contemporary jungle dining with a focus on
            regional ingredients.
          </li>
          <li>
            <strong>Kitchen Table:</strong> Fire-cooked Mexican flavors under
            palm trees.
          </li>
          <li>
            <strong>Taqueria Honorio:</strong> Local favorite for authentic
            tacos.
          </li>
        </ul>

        <h2>Unique Day Trips & Tours</h2>
        <p>
          Consider Viator tours to explore cenotes, biosphere reserves, and
          ancient cities with a knowledgeable guide. You’ll find trips for scuba
          diving, jungle hiking, or cultural immersion.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Best Time to Visit:</strong> October to December for good
            weather and fewer crowds.
          </li>
          <li>
            <strong>Getting There:</strong> Fly into Cancún (CUN) – 2-hour drive
            to Tulum. Book shuttles or rent a car.
          </li>
          <li>
            <strong>Transportation:</strong> Bike rentals are common for short
            distances. Use taxis or colectivos for longer rides.
          </li>
          <li>
            <strong>Eco-Tips:</strong> Use reef-safe sunscreen, avoid plastic
            waste, and support sustainable businesses.
          </li>
          <li>
            <strong>Cultural Etiquette:</strong> Dress modestly when visiting
            ruins. Respect local traditions and communities.
          </li>
        </ul>

        <p>
          <strong>Safety:</strong> Tulum is generally safe, but take standard
          precautions. Stick to busy areas at night and watch valuables.
        </p>

        <p>
          For official travel updates, visit the{" "}
          <a
            href="https://www.visitmexico.com/en/main-destinations/quintana-roo/tulum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mexico Tourism Website
          </a>
          .
        </p>

        <h2>Map of Tulum</h2>
        <div className="tulum-map">
          <iframe
            title="Tulum Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15029.340047329738!2d-87.46621450923255!3d20.211492880803347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd3cbca8ea181%3A0xf07a13b2f8ad208d!2sTulum%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sin!4v1719200000000!5m2!1sen!2sin"
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

export default Tulum;
