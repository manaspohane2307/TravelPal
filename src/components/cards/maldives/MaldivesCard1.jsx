import React from "react";
import "../../../styles/cards/maldives/MaldivesCard1.css";
import bannerImg from "../../../assets/maldives/card1.jpg";

export default function MaldivesCard1() {
  return (
    <div className="card1-container">
      <img src={bannerImg} alt="Maldives Tour" className="banner-img" />
      <h1 className="card1-title">
        Escape To Paradise On Maldives Honeymoon Gateway
      </h1>
      <p className="card1-duration">4 Days & 3 Nights</p>

      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Pack your backpacks and get ready for a stupendous Maldives honeymoon
          package from Hyderabad. The Maldives is one of those rare places which
          is covered by unbelievable beaches and lush forests. Islands of
          Maldives are the pearls in the sea of blue...
        </p>
      </section>

      <section className="package-list">
        <h2>Bestselling Maldives Honeymoon Packages</h2>
        <table>
          <thead>
            <tr>
              <th>Packages</th>
              <th>Duration</th>
              <th>Inclusions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marvelous Maldives Honeymoon Tour Package</td>
              <td>4 Nights/5 Days</td>
              <td>Maldives, Adventure, Snorkeling, Nature, Scuba-Diving</td>
            </tr>
            <tr>
              <td>Idyllic Maldives Honeymoon Tour Package</td>
              <td>3 Nights/4 Days</td>
              <td>
                Romantic, Water Activities, Adventure, Best sellers, Budget
              </td>
            </tr>
            <tr>
              <td>Exciting Maldives Honeymoon Package</td>
              <td>3 Nights/4 Days</td>
              <td>Romantic, Adventure, Water Activities, Sightseeing</td>
            </tr>
            <tr>
              <td>Astonishing Honeymoon Package To Maldives</td>
              <td>4 Nights/5 Days</td>
              <td>Beach, Water Activities, Nightlife, Solo</td>
            </tr>
            <tr>
              <td>Splendid Maldives Honeymoon Package</td>
              <td>4 Nights/5 Days</td>
              <td>Snorkeling, Nature, Banana Boat Ride, Water Activities</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="highlights">
        <h2>Highlights</h2>
        <ul>
          <li>Soak up the sun & enjoy your sojourn amidst serene environs</li>
          <li>Take delight in a spa treatment with your partner</li>
          <li>Dive in the underwater world to explore Maldives’ wonders</li>
          <li>Enjoy diving, windsurfing, kayaking & more</li>
        </ul>
      </section>

      <section className="itinerary">
        <h2>Itinerary</h2>
        <div>
          <h3>Day 1: Maldives – Arrival, Leisure Day</h3>
          <p>
            Arrive at Male International Airport. Transfer to Olhuveli Beach
            Resort & Spa via speedboat...
          </p>
        </div>
        <div>
          <h3>Day 2: Maldives – Leisure Day</h3>
          <p>
            Explore on your own—local markets, pristine beaches, or enjoy at the
            resort.
          </p>
        </div>
        <div>
          <h3>Day 3: Maldives – Leisure Day</h3>
          <p>Enjoy water activities or spa experiences at the resort.</p>
        </div>
        <div>
          <h3>Day 4: Maldives – Departure</h3>
          <p>
            Breakfast, checkout, and transfer to airport. Farewell Maldives!
          </p>
        </div>
      </section>

      <section className="hotel-info">
        <h2>Hotels</h2>
        <p>
          <strong>Male:</strong> Sun Siyam Olhuveli (Olhuveli, Male 08400,
          Maldives)
        </p>
      </section>

      <section className="inclusions">
        <h2>Inclusions</h2>
        <ul>
          <li>2 Nights Grand Beach Villa + 1 Night Deluxe Water Villa</li>
          <li>All meals at Sunset Restaurant</li>
          <li>Return speedboat transfers</li>
          <li>Fruit basket, honeymoon dinner, bed decoration, cake</li>
          <li>Free dolphin cruise (min. 3 nights)</li>
          <li>Children (up to 2) stay free (taxes apply)</li>
        </ul>
      </section>

      <section className="exclusions">
        <h2>Exclusions</h2>
        <ul>
          <li>Travel Insurance</li>
          <li>Personal Expenses</li>
          <li>Anything not mentioned in inclusions</li>
        </ul>
      </section>

      <section className="faq">
        <h2>FAQs About Maldives Tour Packages</h2>
        <details>
          <summary>Which are the must-have cuisines of Maldives?</summary>
          <p>Bis keemiya, Boshi mashuni, Garudhiya and Saagu bondibai...</p>
        </details>
        <details>
          <summary>What is the best time for a honeymoon to Maldives?</summary>
          <p>
            December to February (dry season), May to November (marine life)
          </p>
        </details>
        <details>
          <summary>Can honeymooners pay in installments?</summary>
          <p>Yes, speak to our travel advisor for EMI options.</p>
        </details>
        <details>
          <summary>Best attractions at Olhuveli Beach Resort?</summary>
          <p>Jet skiing, banana boat, canoeing, dolphin cruises, etc.</p>
        </details>
      </section>
    </div>
  );
}
