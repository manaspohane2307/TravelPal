import React from "react";
import "../../../styles/cards/maldives/MaldivesCard3.css";
import bannerImg from "../../../assets/maldives/card3.jpg";

export default function MaldivesCard3() {
  return (
    <div className="card3-container">
      <img
        src={bannerImg}
        alt="Budget Delight in Maldives Tour"
        className="card3-banner"
      />
      <h1 className="card3-title">
        Budget Delight Maldives Tour – 4 Nights & 5 Days
      </h1>

      <section className="card3-section">
        <h2>Overview</h2>
        <p>
          Known for its tropical charm, Maldives is one of the premier beach
          destinations in the world. Our 4N/5D Maldives tour package includes
          luxurious stays, leisure time, adventure options, and scenic sunsets.
          Ideal for couples, honeymooners, and families alike.
        </p>
        <p>
          Choose from top city-specific packages from Hyderabad, Kolkata,
          Jaipur, Lucknow, and Vadodara, with activities like couples spa,
          snorkeling, canoeing, and sunset walks.
        </p>
      </section>

      <section className="card3-section">
        <h2>Highlights</h2>
        <ul>
          <li>
            Enjoy up to 35% off room rates with a special 3-night transfer offer
            at Villa Nautica
          </li>
          <li>Perfect for honeymooners and families</li>
          <li>2 kids below 12 get free stay & meals</li>
          <li>Daily meals included with beach & water villa combo stay</li>
        </ul>
      </section>

      <section className="card3-section">
        <h2>Itinerary</h2>
        <div>
          <h3>Day 1 – Arrival & Leisure</h3>
          <p>
            Arrival at Male. Speedboat transfer to the resort. Relax and enjoy
            dinner at the resort.
          </p>
        </div>
        <div>
          <h3>Day 2 – Leisure & Activities</h3>
          <p>
            Spend the day exploring the resort, beach walks, and optional water
            sports. All meals included.
          </p>
        </div>
        <div>
          <h3>Day 3 – Sunrise & Sunset</h3>
          <p>
            Enjoy beautiful sunrise views, beach relaxation, and romantic sunset
            walk. Overnight stay included.
          </p>
        </div>
        <div>
          <h3>Day 4 – Resort Activities</h3>
          <p>
            Relax at the pool, go for spa, enjoy meals. Free to plan your day at
            leisure.
          </p>
        </div>
        <div>
          <h3>Day 5 – Departure</h3>
          <p>
            After breakfast, check-out and transfer via speedboat to the
            airport.
          </p>
        </div>
      </section>

      <section className="card3-section">
        <h2>Hotel</h2>
        <p>
          <strong>Villa Nautica at Paradise Island</strong>
        </p>
        <p>North Male Atoll, Maldives – 8420</p>
      </section>

      <section className="card3-section">
        <h2>Inclusions</h2>
        <ul>
          <li>Welcome Drink on Arrival</li>
          <li>2 Nights Beach Villa + 2 Nights Water Villa</li>
          <li>All Meals (Breakfast, Lunch, Dinner)</li>
          <li>Return Speedboat Transfers</li>
          <li>Green Tax</li>
          <li>Bottle of Sparkling Wine + Fruit Basket (for honeymooners)</li>
          <li>Free Visa on Arrival</li>
        </ul>
      </section>

      <section className="card3-section">
        <h2>Exclusions</h2>
        <ul>
          <li>Airfare</li>
          <li>Travel Insurance</li>
          <li>Personal Expenses</li>
          <li>Optional Tours</li>
          <li>Anything not mentioned in Inclusions</li>
        </ul>
      </section>

      <section className="card3-section faq">
        <h2>FAQs</h2>
        <details>
          <summary>What is the best time to visit Maldives?</summary>
          <p>
            December to March is peak season. November to April has the best
            weather.
          </p>
        </details>
        <details>
          <summary>How do I reach Maldives from India?</summary>
          <p>
            Direct flights available from major cities. You land at Male (MLE)
            or Gan Airport.
          </p>
        </details>
        <details>
          <summary>Which water sports can I enjoy?</summary>
          <p>
            Snorkeling, jet skiing, banana boat, parasailing, wakeboarding,
            windsurfing.
          </p>
        </details>
        <details>
          <summary>How far is the resort from the airport?</summary>
          <p>About 97 km from Male. Takes approx. 2 hours via speedboat.</p>
        </details>
        <details>
          <summary>Best restaurants in Maldives?</summary>
          <p>
            Ithaa Undersea Restaurant, Baraabaru, Reef Club, Belle Amie Bistro.
          </p>
        </details>
      </section>
    </div>
  );
}
