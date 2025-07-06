import React from "react";
import { Link } from "react-router-dom";

import MaldivesCards from "../../components/cards/maldives/MaldivesCards";
import Footer from "../../components/Footer";
import "../../styles/quotations/MaldivesQuotations.css";

const quickFacts = {
  Highlight:
    "Peaceful Atmosphere, Blue Ocean, White Sandy Beaches, Water Villas, Marine Life, Water Activities, Vibrant Maldivian Culture",
  Experiences:
    "Water Adventures, Sunset Cruise, Walking Tour, Island Hopping, Interaction with Locals, Underwater Dining",
  MajorAttractions:
    "Male, Huvahendhoo Island, Maafushi, Baros Island, Hulhumale, Biyadhoo Island, Vaadhoo Island, Banana Reef",
  BestTime:
    "December to March (Peak Season), November and April (Shoulder Season), May to October (Off-Season)",
  PopularBeaches:
    "Hulhumale Beach, Bikini Beach, Reethi Beach, Veligandu Island, Artificial Beach, Fulhadhoo Beach",
  Cuisine:
    "Fish Curry, Mas Huni, Fried Yams, Maldivian Live Lobster, Masroshi, Gulha, Bis Keemiya",
  BestRestaurants:
    "Reethi Restaurant, Pebbles By Royal, The Market, Maaniya Restaurant, The Spice, Conrad Maldives Rangali Island",
  IndianRestaurants:
    "Bombay Darbar, Baraabaru, Acha’s Poppadums, Symphony Restaurant, Tandoori Flames",
  LuxuryStays:
    "Club Med Kani Resort, Sun Aqua Vilu Reef Resort Dhaalu Atoll, Centara Ras Fushi Resort & Spa Maldives Male, Sheraton Maldives Full Moon Resort & Spa, Velidhu Island Resort Dhiffushi",
  BudgetStays:
    "Island life Maldives Retreat & Spa, Crown Beach Hotel, Stingray Beach Inn, Ameera Maldives",
  Currency: "Maldivian Rufiyaa",
  Transport: "Speedboat, Ferry, Seaplane, Maldivian Dhoni, Yacht, Bus, Taxi",
  Festivals:
    "Ramadan, Eid-Ul Fitr, Bodu Eid, Eid-Ul-Adha, National Day, Republic Day",
  Language: "Dhivehi",
  Visa: "Visa on Arrival for Indians",
  InhabitedIslands: "Approximately 200",
};

const placesToExplore = [
  "COMO Cocoa Island",
  "Huvahendhoo Island",
  "Halaveli Island",
  "Sun Island",
  "Male",
  "Alimatha Island",
  "Biyadhoo Island",
  "Banana Reef",
  "Artificial Beach",
  "National Museum",
  "Maafushi",
  "Addu Atoll",
  "Dhangethi",
  "Baros Island",
  "Hithadhoo",
];

export default function MaldivesQuotations() {
  return (
    <div className="maldives-page">
      <div className="maldives-hero">
        <h1 className="maldives-heading">Maldives Tour Packages</h1>
      </div>

      <div className="content-box">
        <p className="guide-line">
          For detailed travel guide:{" "}
          <Link to="/travel-guides/maldives" className="guide-link">
            Visit Travel Guides
          </Link>
        </p>

        <section className="intro">
          <h2 className="section-heading">Explore Maldives</h2>
          <p>
            Want to sip Mai-Tais while relaxing on the beautiful beaches and
            idyllic islands? Explore the enchanting beauty of the Maldives with
            our Maldives Tour Packages. Famous for exotic beaches, coral reefs,
            azure waters, and thrilling water activities, Maldives attracts all
            kinds of travelers — from families to newlyweds. From Male to Addu
            Atoll, explore beyond shimmering beaches and vibrant marine life
            with our luxury stays and custom packages.
          </p>

          <p>
            Your Maldives Trip awaits — promising not just a vacation, but a
            transformative experience. Let our Maldives Vacation be your
            passport to serenity, where every moment celebrates the enchanting
            allure of this tropical paradise.
          </p>
        </section>

        <section className="intro">
          <h2 className="section-heading">Top Maldives Tour Packages</h2>
          <MaldivesCards />
        </section>

        <section className="quick-facts">
          <h2 className="section-heading">Quick Facts About Maldives</h2>
          <div className="scroll-box-wrapper">
            {Object.entries(quickFacts).map(([key, value]) => (
              <div className="scroll-box" key={key}>
                <h3>{key.replace(/([A-Z])/g, " $1").trim()}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="places">
          <h2 className="section-heading">Places to Explore</h2>
          <div className="scroll-box-wrapper">
            {placesToExplore.map((place) => (
              <div className="scroll-box" key={place}>
                <p>{place}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose">
          <h2 className="section-heading">
            Why Choose Maldives Tour Package From Us?
          </h2>
          <p>
            Every Maldives holiday package is a curated collection of
            experiences put together by travel experts who have explored the
            islands extensively. Customize your Maldives holiday and tick all
            your travel wishlist boxes. Maldives is well-connected with Indian
            cities like Mumbai, Delhi, Chennai, and Bengaluru — so pack your
            bags and let us take care of the rest.
          </p>
        </section>

        <section className="reach">
          <h2 className="section-heading">How to Reach Maldives</h2>
          <div className="dual-box-section">
            <div className="dual-box">
              <h3>By Air</h3>
              <p>
                The fastest and most economical way to reach Maldives is by
                flight. Direct flights from Kochi and Bangalore connect to
                Ibrahim Nasir International Airport in Male. International
                airlines include Qatar Airways, Singapore Airlines, Etihad, and
                British Airways
              </p>
            </div>
            <div className="dual-box">
              <h3>By Sea</h3>
              <p>
                For a scenic and relaxed journey, cruises from Kochi to Male are
                available. A 3-day cruise lets you explore marine life, enjoy
                luxury onboard, and soak in panoramic views of the Indian Ocean.
              </p>
            </div>
          </div>
        </section>

        <section className="season">
          <h2 className="section-heading">Best Time to Visit Maldives</h2>
          <div className="dual-box-section">
            <div className="dual-box">
              <h3>Dry Season</h3>
              <p>
                December to February is perfect for beach lovers and
                honeymooners. Clear skies, warm sun, and calm waters make it the
                most popular time for Maldives vacations. Book early to get the
                best deals.
              </p>
            </div>
            <div className="dual-box">
              <h3>Wet Season</h3>
              <p>
                March to October is ideal for adventure seekers. Scuba diving,
                surfing, kitesurfing, and other water sports are in full swing
                during the wet season. Enjoy Maldives with fewer crowds and
                lower rates.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
