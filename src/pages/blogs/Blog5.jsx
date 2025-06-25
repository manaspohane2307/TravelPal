import React from "react";
import "../../styles/blogs/Blog5.css";
import blog5Img from "../../assets/blogs/blog5.jpg";

const Blog5 = () => {
  return (
    <div className="blog5-container">
      <img
        src={blog5Img}
        alt="Packing Tips for Travelers"
        className="blog5-banner"
      />
      <h1 className="blog5-title">Packing Tips for Travelers</h1>

      <div className="blog5-content">
        <h2>🧳 Master the Art of Packing</h2>
        <p>
          Whether you're traveling for a weekend getaway or a month-long
          adventure, smart packing can make your journey more convenient and
          stress-free.
        </p>

        <h2>🎯 Start with a Packing List</h2>
        <ul>
          <li>
            Use a checklist app or paper to ensure you don't miss essentials.
          </li>
          <li>
            Divide items into categories: clothes, toiletries, electronics,
            documents, etc.
          </li>
        </ul>

        <h2>🧼 Follow the Rule of 3</h2>
        <ul>
          <li>
            Pack 3 tops, 3 bottoms, and 3 undergarments for any trip length —
            rotate and rewash.
          </li>
          <li>Choose versatile, neutral-colored clothing to mix and match.</li>
        </ul>

        <h2>🎒 Use Packing Cubes</h2>
        <ul>
          <li>Keep your luggage organized with cubes or compression bags.</li>
          <li>Separate clean clothes, used clothes, and accessories.</li>
        </ul>

        <h2>🔌 Don’t Forget Tech & Documents</h2>
        <ul>
          <li>
            Carry universal adapters, power banks, and essential chargers.
          </li>
          <li>
            Keep copies of passports, tickets, and hotel bookings digitally and
            in print.
          </li>
        </ul>

        <h2>💧 Travel-Size Toiletries Only</h2>
        <ul>
          <li>
            Use leak-proof bottles for shampoo, conditioner, and body wash.
          </li>
          <li>
            Pack a mini first-aid kit with basics: band-aids, pain relievers,
            etc.
          </li>
        </ul>

        <h2>👟 Wear the Bulkiest Items</h2>
        <ul>
          <li>
            Wear your jacket or heaviest shoes during transit to save space in
            your bag.
          </li>
        </ul>

        <h2>🔒 Stay Safe & Smart</h2>
        <ul>
          <li>Use TSA-approved locks and keep valuables in your carry-on.</li>
          <li>
            Consider an RFID-blocking wallet or pouch for passports/cards.
          </li>
        </ul>

        <h2>🚀 Final Tip</h2>
        <p>
          Less is more. Packing light means more flexibility, easier mobility,
          and less stress. Focus on what’s essential, and enjoy your trip
          without heavy baggage.
        </p>
      </div>
    </div>
  );
};

export default Blog5;
