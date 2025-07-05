import React from "react";
import "../../../styles/cards/maldives/MaldivesCard5.css";
import cardImg5 from "../../../assets/maldives/card5.jpg";


export default function MaldivesCard5() {
  return (
    <div className="card5-container">
      <img
        src={cardImg5}
        alt="Best-Selling Maldives Tour"
        className="card5-image"
      />
      <div className="card5-content">
        <h2>Best-Selling Maldives Tour Packages for a Spellbinding Vacation</h2>
        <p className="duration">6 Days & 5 Nights</p>
        <p className="location">Trip Location: Maldives</p>
        <p>
          <strong>Destinations Covered:</strong> 5N Maldives
        </p>
        <p>
          <strong>Start & End Point:</strong> GAN International Airport
        </p>
        <p>
          <strong>Accommodation:</strong> Hotel / Resort / Guesthouse
        </p>
        <p>
          <strong>Things to do:</strong> Sightseeing, Shopping, Snorkelling,
          Scuba Diving, Dolphin Watching
        </p>

        <h3>About the Package</h3>
        <p>
          Explore the tropical paradise of Maldives with this all-inclusive tour
          package from Chennai. With luxurious accommodations, thrilling water
          activities, and serene beach vibes, this vacation is crafted for
          ultimate relaxation and adventure.
        </p>

        <h3>Highlights</h3>
        <ul>
          <li>Speedboat Transfers</li>
          <li>Snorkeling & Scuba Diving</li>
          <li>Dolphin Cruise & Island Tours</li>
          <li>Luxury Beach Villa Stay</li>
          <li>Rejuvenating Spa Sessions</li>
        </ul>

        <h3>Itinerary Snapshot</h3>
        <ol>
          <li>
            <strong>Day 1:</strong> Arrival at GAN Airport & Resort Transfer
          </li>
          <li>
            <strong>Day 2:</strong> Watersports & Beach Leisure
          </li>
          <li>
            <strong>Day 3:</strong> Spa Session or Island Hopping
          </li>
          <li>
            <strong>Day 4:</strong> Dolphin Watching Cruise
          </li>
          <li>
            <strong>Day 5:</strong> Outdoor Games & Fish Feeding
          </li>
          <li>
            <strong>Day 6:</strong> Checkout & Departure
          </li>
        </ol>

        <h3>Hotel</h3>
        <p>
          <strong>Resort:</strong> Canareef Resort Maldives, Addu City
        </p>

        <h3>Inclusions</h3>
        <ul>
          <li>Return Economy Airfare to GAN Airport</li>
          <li>5 Nights Stay with Daily Breakfast & Dinner</li>
          <li>Round Trip Speedboat Transfers</li>
          <li>Welcome Drink on Arrival</li>
          <li>Gym, Table Tennis, Billiards, and Wi-Fi</li>
        </ul>

        <h3>Exclusions</h3>
        <ul>
          <li>Travel Insurance</li>
          <li>Lunch</li>
          <li>Anything not mentioned in Inclusions</li>
        </ul>
      </div>
    </div>
  );
}
