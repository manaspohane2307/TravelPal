import React from "react";
import "../../../styles/cards/maldives/MaldivesCard2.css";
import bannerImg from "../../../assets/maldives/card2.jpg";

export default function MaldivesCard2() {
  return (
    <div className="card2-container">
      <img src={bannerImg} alt="Radisson Blu Maldives" className="banner-img" />
      <h1 className="card2-title">
        Radisson Blu Maldives Water Villa – 4 Days & 3 Nights
      </h1>

      <section className="overview-section">
        <h2>Trip Overview</h2>
        <ul>
          <li>
            <strong>Location:</strong> Male, Maldives
          </li>
          <li>
            <strong>Start/End Point:</strong> Male Airport
          </li>
          <li>
            <strong>Things To Do:</strong> Diving, Swimming, Snorkeling, Island
            Hopping
          </li>
        </ul>
        <p>
          Radisson Blu Maldives Water Villa is a luxurious escape located in
          Alifu Dhaalu Atoll, about 105 km from Male Airport. Access via 30-min
          seaplane or domestic flight to Maamigili + 15-min speedboat. It
          features 128 villas (including family & premium overwater options),
          blending Maldivian essence with luxury.
        </p>
      </section>

      <section className="rooms-section">
        <h2>Room Categories</h2>
        <ul>
          <li>
            <strong>Overwater Villa with Private Pool:</strong> Ideal for
            couples seeking seclusion.
          </li>
          <li>
            <strong>Two-Bedroom Family Beach Villa:</strong> Perfect for
            families with private pool.
          </li>
          <li>
            <strong>Three-Bedroom Overwater Villa:</strong> Spacious luxury with
            panoramic views.
          </li>
        </ul>
      </section>

      <section className="facilities-section">
        <h2>Facilities</h2>
        <ul>
          <li>Entire Villa, Private Pool, Sea View</li>
          <li>Air Conditioning, Ensuite Bathroom</li>
          <li>Flat-screen TV, Coffee Machine, Minibar</li>
          <li>Free WiFi, Pool with View</li>
        </ul>
      </section>

      <section className="highlights-section">
        <h2>Highlights</h2>
        <ul>
          <li>Ultimate relaxation with spa & leisure experiences</li>
          <li>Romantic getaways for honeymooners</li>
          <li>Swimming pools & beachside dining</li>
        </ul>
      </section>

      <section className="itinerary-section">
        <h2>Itinerary</h2>
        <div>
          <h3>Day 1 – Arrival and Leisure</h3>
          <p>
            Arrive at Male Airport. Get transferred to the resort. Unwind and
            explore the resort.
          </p>
        </div>
        <div>
          <h3>Day 2 – Leisure + Activities</h3>
          <p>
            Enjoy breakfast, island exploration, snorkeling, and other water
            sports.
          </p>
        </div>
        <div>
          <h3>Day 3 – Cultural Day</h3>
          <p>
            Explore local landmarks, go shopping, and experience the culture.
          </p>
        </div>
        <div>
          <h3>Day 4 – Departure</h3>
          <p>
            Breakfast, pack up, and transfer to the airport for your departure.
          </p>
        </div>
      </section>

      <section className="hotel-section">
        <h2>Hotel</h2>
        <p>
          <strong>Hotel:</strong> Radisson Blu Resort Maldives
        </p>
        <p>
          <strong>Location:</strong> Huruelhi Island, Alifu Dhaalu Atoll,
          Fenfushi
        </p>
      </section>

      <section className="inclusions-section">
        <h2>Inclusions</h2>
        <ul>
          <li>Hotel Stay</li>
          <li>All Meals</li>
          <li>Return Airport Transfers</li>
          <li>Taxes</li>
        </ul>
      </section>

      <section className="exclusions-section">
        <h2>Exclusions</h2>
        <ul>
          <li>Airfare</li>
          <li>Travel Insurance</li>
          <li>Personal Expenses</li>
        </ul>
      </section>

      <section className="faq-section">
        <h2>FAQs</h2>
        <details>
          <summary>How old is Radisson Blu Maldives?</summary>
          <p>Opened in Nov 2013 by Radisson Rewards Group.</p>
        </details>
        <details>
          <summary>How do I get there?</summary>
          <p>
            Fly to Male → Domestic flight to Villa Airport → Speedboat to
            resort.
          </p>
        </details>
        <details>
          <summary>Where is Huruelhi Island?</summary>
          <p>30-min seaplane ride from Male Airport.</p>
        </details>
        <details>
          <summary>Who owns Radisson Blu?</summary>
          <p>Federico J. González</p>
        </details>
        <details>
          <summary>Is Maldives good in December?</summary>
          <p>Yes, it's warm and pleasant though some rainfall is possible.</p>
        </details>
      </section>
    </div>
  );
}
