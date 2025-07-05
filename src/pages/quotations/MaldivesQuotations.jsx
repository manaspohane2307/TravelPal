import React from "react";
import { Link } from "react-router-dom";

import MaldivesCards from "../../components/cards/maldives/MaldivesCards";
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
      <div className="content-box">
        <h1>Maldives Tour Packages</h1>

        <p className="guide-line">
          For detailed travel guide:{" "}
          <Link to="/travel-guides/maldives" className="guide-link">
            Visit Travel Guides
          </Link>
        </p>

        <section className="intro">
          <p>
            Want to sip Mai-Tais while relaxing on the beautiful beaches and
            idyllic islands? Explore the enchanting beauty of the Maldives with
            our Maldives Tour Packages, as this tropical island country lies in
            the southwest of India and Sri Lanka in the Indian Ocean. Famous for
            its exotic beaches, coral reefs, azure waters, and thrilling water
            activities, high-end water villas, Maldives attracts all kinds of
            travelers varying from families to friend groups and solo travelers
            to newlyweds. The island paradise is often quoted as a turquoise
            heaven for those who love oceanic getaways, and our best Maldives
            Holidays packages focus on catering to the same. From Male to Addu
            Atoll, explore beyond the shimmering white sand beaches, dive in to
            see the vibrant marine life, and unwind with luxury stays. Read on
            to know more about Maldives packages offering you an unparalleled
            international vacation. Indulge in the ultimate Maldives Tourism
            experience with our carefully crafted Maldives Tour.
          </p>
          <p>
            Embark on an unforgettable journey with our Maldives Holidays
            packages, designed to immerse you in the epitome of luxury and
            natural beauty. Your Maldives Trip awaits, promising not just a
            vacation but a transformative experience amid the turquoise waters
            and pristine landscapes. Let our Maldives Vacation be your passport
            to serenity, where every moment is a celebration of the enchanting
            allure that defines this tropical paradise.
          </p>
        </section>

        <section className="quick-facts">
          <h2>Quick Facts About Maldives</h2>
          <ul>
            {Object.entries(quickFacts).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="places">
          <h2>Places to Explore</h2>
          <ul>
            {placesToExplore.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </section>

        <section className="why-choose">
          <h2>Why Choose Maldives Tour Package From Us?</h2>
          <p>
            Every Maldives holiday package is a curated collection of
            experiences put together by the travel experts at Travel Triangle,
            who are themselves seasoned travelers who have gone on a tour
            multiple times. This means no one else can take you on this tour
            like Travel Triangle. Furthermore, we understand that no two
            Maldives packages are alike, and everyone has different expectations
            from a Maldives tour package. You, therefore, have the freedom to
            customize your Maldives holiday and check all your boxes of things
            to do in Maldives. Wherever you live in India, Maldives beckons as
            it enjoys direct connectivity with all the major cities of India
            like Mumbai, Delhi, Kolkata, Chennai, Bengaluru, and Hyderabad. So,
            pack your bags and get ready for the ultimate Maldives vacation.
            Read on to find out more about your dream Maldives vacation.
          </p>
        </section>

        <section className="reach">
          <h2>How to Reach Maldives</h2>
          <h3>By Air</h3>
          <p>
            Reaching the Maldives by flight is the fastest and most economical
            way. Book your flight tickets in advance and save on the Maldives
            tour cost from India. Flights from Kochi and Bangalore in India are
            directly connected to the Ibrahim Nasir International Airport in
            Male, Maldives. International flights that are available to commute
            to this serene island country include Sri Lankan Airlines, Qatar
            Airways, SilkAir, Thai Airways, Bangkok Airways, Etihad Airways, Jet
            Airways, Singapore Airlines, British Airways, and Cathay Pacific.
          </p>
          <h3>By Sea</h3>
          <p>
            If you want to experience marine life and wish to spend time in
            leisure with freedom, fun, and no restrictions, you can opt to
            travel to the tropical nation via sea. By booking yourselves the 3
            days cruise from Kochi to Male, you can save yourself a seat to
            experience the fun and exciting cruise life on the Indian Ocean.
            It’s better to take water transport between November and April. So
            plan out your Maldives holidays keeping in mind to add the extra
            three-day adventure!
          </p>
        </section>

        <section className="season">
          <h2>Best Time to Visit Maldives</h2>
          <h3>Dry Season</h3>
          <p>
            The dry season in the Maldives starts from the month of December and
            continues till the month of February. Book in advance the Maldives
            package with airfare to get the best deals and discounts. This is
            the best time to visit for those travellers who are looking to run
            away from the hustle and bustle of their lives and relax on the
            exotic beaches. The sun shines the brightest, the sky is mostly blue
            and cloudless with little or no rain making one feel lively and
            peaceful. The lush greens and azure waters add to the beauty of this
            island country.
          </p>
          <h3>Wet Season</h3>
          <p>
            Months between March and October are the best to visit if someone is
            looking to satiate their adrenaline rush. The wet season is the
            season of water sports such as surfing and other activities in the
            Maldives. Scuba diving in the waters with clear visibility,
            kitesurfing, windsurfing, and jet-skiing are a few of the famous
            water activities that adventure enthusiasts indulge in. When you are
            booking your Maldives travel packages all inclusive, do not forget
            to enquire about the escapades and thrilling adventures you and your
            family can take part in!
          </p>
        </section>

        <section className="table-section">
          <h2>Bestselling Maldives Tour Packages</h2>
          <table className="quotation-table">
            <thead>
              <tr>
                <th>Maldives Tour Packages</th>
                <th>Duration</th>
                <th>Price*</th>
                <th>Inclusions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escape To Paradise On Maldives Honeymoon Gateway</td>
                <td>3 Nights/4 Days</td>
                <td>₹69,999/-</td>
                <td>
                  Upto 4 Stars, Flights, Meals, Sightseeing, Transfers, Stay
                  Included
                </td>
              </tr>
              <tr>
                <td>Radisson Blu Maldives Water Villa</td>
                <td>3 Nights/4 Days</td>
                <td>₹152,850/-</td>
                <td>
                  Upto 5 Stars, Meals, Return Airport Transfers, Stay Included
                </td>
              </tr>
              <tr>
                <td>Mesmerizing Maldives Tour Package</td>
                <td>4 Nights/5 Days</td>
                <td>₹108,400/-</td>
                <td>Upto 5 Stars, Meals, Transfers, Stay Included</td>
              </tr>
              <tr>
                <td>Best Maldives Sightseeing Tour Package</td>
                <td>4 Nights/5 Days</td>
                <td>₹50,000/-</td>
                <td>
                  Upto 3 Stars, Meals, Sightseeing, Transfers, Stay Included
                </td>
              </tr>
              <tr>
                <td>Best Selling Maldives Holidays For Leisure</td>
                <td>4 Nights/5 Days</td>
                <td>₹130,550/-</td>
                <td>
                  Upto 4 Stars, Flights, Meals, Sightseeing, Transfers, Stay
                  Included
                </td>
              </tr>
              <tr>
                <td>An Exciting Maldives Tour Package</td>
                <td>3 Nights/4 Days</td>
                <td>₹74,400/-</td>
                <td>
                  Upto 5 Stars, Meals, Sightseeing, Stay Included, Transfers
                </td>
              </tr>
              <tr>
                <td>Top-Selling 3N/4D Maldives Package</td>
                <td>3 Nights/4 Days</td>
                <td>₹99,500/-</td>
                <td>
                  Upto 4 Stars, Meals, Sightseeing, Stay Included, Transfers
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="card-section">
          <h2>Showing Maldives Tour Packages</h2>
          <MaldivesCards />
        </section>
      </div>
    </div>
  );
}
