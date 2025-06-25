import React from "react";
import "../../styles/blogs/Blog6.css";
import blog6Img from "../../assets/blogs/blog6.jpg";

const Blog6 = () => {
  return (
    <div className="blog6-container">
      <img src={blog6Img} alt="Best Beach Escapes" className="blog6-banner" />
      <h1 className="blog6-title">Best Beach Escapes</h1>

      <div className="blog6-content">
        <h2>🏝️ Time to Unplug and Relax</h2>
        <p>
          Craving sun, sea, and sand? Whether you want adventure or pure
          relaxation, these beach destinations offer a perfect coastal getaway.
        </p>

        <h2>🌴 Maldives</h2>
        <ul>
          <li>Crystal-clear turquoise waters and overwater bungalows.</li>
          <li>Perfect for snorkeling, diving, or honeymooning.</li>
          <li>Private island resorts offer total seclusion.</li>
        </ul>

        <h2>🏖️ Maui, Hawaii</h2>
        <ul>
          <li>Golden beaches, waterfalls, and volcanic landscapes.</li>
          <li>Great surf spots and whale watching in winter months.</li>
          <li>Drive the scenic Road to Hana for beach stops and hikes.</li>
        </ul>

        <h2>🇲🇽 Tulum, Mexico</h2>
        <ul>
          <li>Boho-chic beach vibes with Mayan ruins nearby.</li>
          <li>Swim in cenotes and enjoy beachside yoga retreats.</li>
          <li>Sustainable boutique hotels on white-sand beaches.</li>
        </ul>

        <h2>🇹🇭 Phuket, Thailand</h2>
        <ul>
          <li>Lively beaches like Patong or serene escapes like Kata Noi.</li>
          <li>Boat trips to Phi Phi Islands and Phang Nga Bay.</li>
          <li>Street food, massages, and budget-friendly resorts.</li>
        </ul>

        <h2>🇬🇷 Santorini, Greece</h2>
        <ul>
          <li>Stunning sunsets and unique red/black sand beaches.</li>
          <li>Volcanic rock formations and cliffside towns.</li>
          <li>Combines beach time with romantic island charm.</li>
        </ul>

        <h2>🧳 Beach Tips for Travelers</h2>
        <ul>
          <li>Pack reef-safe sunscreen and light, breathable clothing.</li>
          <li>Bring a quick-dry towel and waterproof phone case.</li>
          <li>
            Respect marine life — avoid stepping on coral or collecting shells.
          </li>
        </ul>

        <h2>🌊 Your Paradise Awaits</h2>
        <p>
          From calm retreats to buzzing coastlines, there's a beach for every
          kind of traveler. Let the waves wash away your worries and escape to
          paradise.
        </p>
      </div>
    </div>
  );
};

export default Blog6;
