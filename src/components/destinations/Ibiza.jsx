import React from "react";
import "../../styles/destinations/Ibiza.css";
import ibizaImage from "../../assets/ibiza.jpg";
import Footer from "../../components/Footer";

const Ibiza = () => {
  return (
    <div className="ibiza-container">
      <h1 className="ibiza-heading">Ibiza</h1>

      <p className="ibiza-description">
        Ibiza, a beautiful blend of high-energy nightlife and serene
        Mediterranean charm, presents a unique vacation experience for every
        type of traveler.
      </p>

      <img src={ibizaImage} alt="Ibiza" className="ibiza-main-image" />

      <div className="ibiza-content">
        <p>
          Ibiza, part of Spain's Balearic Islands, is synonymous with vibrant
          nightlife, crystalline waters, and stunning beaches. This
          Mediterranean gem offers a mix of world-class clubs, serene coastal
          retreats, historical sites, and captivating natural landscapes.
        </p>
        <p>
          Whether you seek a wild party scene, a relaxed beach holiday, or
          cultural excursions, Ibiza caters to every traveler's desires.
        </p>

        <h2>
          <strong>Getting There</strong>
        </h2>
        <ul>
          <li>
            <strong>By Air:</strong> Ibiza Airport (IBZ) is the main point of
            entry, connecting with many European cities. Check AENA's site for
            flight details.
          </li>
          <li>
            <strong>By Ferry:</strong> Routes operate from Barcelona, Valencia,
            Denia, and nearby islands. Popular operators include Baleària,
            Trasmediterránea, and Mediterránea Pitiusa.
          </li>
          <li>
            <strong>By Cruise:</strong> Major Mediterranean cruises dock at the
            Port of Ibiza.
          </li>
        </ul>

        <div className="ibiza-map">
          <h2>
            <strong>Map of Ibiza</strong>
          </h2>
          <iframe
            title="Ibiza Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24837.815311937913!2d1.4090053318591282!3d38.90735977818557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129946bc6d9d1985%3A0xb6ca1af29357fa88!2s07800%20Ibiza%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sin!4v1750251269504!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>
          <strong>Top Attractions in Ibiza</strong>
        </h2>

        <h3>
          <strong>1. Beaches in Ibiza</strong>
        </h3>
        <ul>
          <li>
            <strong>Playa d'en Bossa:</strong> Ibiza’s longest beach, perfect
            for beach clubs and sun seekers.
          </li>
          <li>
            <strong>Cala Comte:</strong> Famous for clear waters and sunsets.
            Try Sunset Ashram for food and views.
          </li>
          <li>
            <strong>Cala Salada:</strong> A quiet bay with turquoise waters and
            pine-covered cliffs.
          </li>
        </ul>

        <h3>
          <strong>2. Nightlife in Ibiza</strong>
        </h3>
        <ul>
          <li>
            <strong>Pacha:</strong> One of the most iconic nightclubs in the
            world.
          </li>
          <li>
            <strong>Ushuaïa:</strong> Known for its outdoor parties and top DJs.
          </li>
          <li>
            <strong>Amnesia:</strong> Famous for foam parties and EDM vibes.
          </li>
        </ul>

        <h3>
          <strong>3. Cultural Sites</strong>
        </h3>
        <ul>
          <li>
            <strong>Dalt Vila:</strong> Historic fortress and UNESCO World
            Heritage site with panoramic views.
          </li>
          <li>
            <strong>Ibiza Cathedral:</strong> Beautiful Gothic-style cathedral
            within Dalt Vila.
          </li>
          <li>
            <strong>Es Vedrà:</strong> A mystical rock island known for magnetic
            energy legends.
          </li>
        </ul>

        <h3>
          <strong>4. Nature and Adventure</strong>
        </h3>
        <ul>
          <li>
            Explore hiking and cycling trails that show off the island’s natural
            beauty.
          </li>
          <li>
            Take boat excursions to find secluded coves and snorkeling spots.
          </li>
        </ul>

        <h3>
          <strong>5. Markets</strong>
        </h3>
        <ul>
          <li>
            <strong>Las Dalias:</strong> Colorful market with local crafts,
            fashion, and food.
          </li>
          <li>
            <strong>Punta Arabí:</strong> The biggest hippie market, open
            Wednesdays.
          </li>
        </ul>

        <h3>
          <strong>6. Dining and Cuisine</strong>
        </h3>
        <p>
          Ibiza offers incredible seafood and traditional dishes like{" "}
          <em>Bullit de peix</em> (fish stew) and <em>Sobrasada</em> (spicy
          sausage).
        </p>
        <ul>
          <li>
            <strong>La Oliva:</strong> Mediterranean food with a view in Dalt
            Vila.
          </li>
          <li>
            <strong>El Chiringuito:</strong> Beachfront seafood and relaxed
            atmosphere.
          </li>
          <li>
            <strong>Can Pilot:</strong> Great for grilled meats and local
            favorites.
          </li>
        </ul>

        <h2>
          <strong>Practical Information</strong>
        </h2>
        <ul>
          <li>
            <strong>Best Time to Visit:</strong> June–September is peak. Visit
            in April–May or October for fewer crowds.
          </li>
          <li>
            <strong>Currency:</strong> Euro (€). ATMs and currency exchanges are
            common.
          </li>
          <li>
            <strong>Language:</strong> Spanish and Catalan. English is widely
            spoken in tourist areas.
          </li>
        </ul>

        <h2>
          <strong>Transportation in Ibiza</strong>
        </h2>
        <ul>
          <li>
            <strong>Car Rentals:</strong> Most convenient for exploring (Sixt,
            Hertz, etc.).
          </li>
          <li>
            <strong>Public Buses:</strong> Cheap and decent for major routes.
          </li>
          <li>
            <strong>Taxis:</strong> Available but pricier. Always check the
            meter.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Ibiza;
