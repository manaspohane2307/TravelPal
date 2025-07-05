import React from "react";
import "../../../styles/cards/maldives/MaldivesCard4.css";
import cardImg5 from "../../../assets/maldives/card5.jpg";


export default function MaldivesCard4() {
  return (
    <div className="card4-container">
      <img
        src={cardImg4}
        alt="Best Selling Maldives Holidays"
        className="card4-image"
      />
      <div className="card4-content">
        <h2>Best Selling Maldives Holidays For A Leisure Holiday</h2>
        <p className="duration">5 Days & 4 Nights</p>
        <p className="location">Trip Location: Maldives</p>
        <p>
          <strong>Destinations Covered:</strong> 4N Maldives
        </p>
        <p>
          <strong>Start & End Point:</strong> Male Airport
        </p>
        <p>
          <strong>Accommodation:</strong> Adaaran Select Meedhupparu
        </p>
        <p>
          <strong>Things to do:</strong> Speed boat trip, leisure stay, Spa,
          Dolphin Watching, Jet Ski Ride
        </p>

        <h3>About the Package</h3>
        <p>
          Spread across the Indian Ocean with around 1200 islands, the Maldives
          is a true tropical paradise. This 5D/4N city tour by TravelTriangle
          gives you a slice of the exotic—beaches, marine life, spa sessions,
          water sports, and cultural experiences all wrapped into one perfect
          getaway. Enjoy dolphin spotting, jet ski rides, relaxing spa massages,
          and much more on this best-selling Maldives package!
        </p>

        <h3>Highlights</h3>
        <ul>
          <li>Complimentary meals and drinks</li>
          <li>Dolphin Watching excursion</li>
          <li>Sunset Cruise & Spa Massages</li>
          <li>Jet Ski Ride & Leisure Stay</li>
          <li>Stay in Beach Villa and Water Villa</li>
        </ul>

        <h3>Itinerary Snapshot</h3>
        <ol>
          <li>
            <strong>Day 1:</strong> Arrival & Leisure Day
          </li>
          <li>
            <strong>Day 2:</strong> Water sports & Local exploration
          </li>
          <li>
            <strong>Day 3:</strong> Beach day & culture walk
          </li>
          <li>
            <strong>Day 4:</strong> Spa and Relaxation
          </li>
          <li>
            <strong>Day 5:</strong> Departure
          </li>
        </ol>

        <h3>Hotel</h3>
        <p>
          <strong>Resort:</strong> Adaaran Select Meedhupparu, Raa Atoll
        </p>

        <h3>Inclusions</h3>
        <ul>
          <li>Welcome Drinks on Arrival</li>
          <li>Complimentary Domestic Flight Transfers</li>
          <li>2 Nights Beach Villa + 2 Nights Water Villa</li>
          <li>All meals with unlimited drinks</li>
          <li>30-min Spa Massage (once)</li>
          <li>Jet Ski Ride (once)</li>
          <li>Sunset Cruise + Dolphin Watching</li>
          <li>All Taxes & Free Visa On Arrival</li>
        </ul>

        <h3>Exclusions</h3>
        <ul>
          <li>Airfare & Travel Insurance</li>
          <li>Personal expenses</li>
          <li>Optional Tours not listed above</li>
        </ul>
      </div>
    </div>
  );
}
