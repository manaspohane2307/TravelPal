import React from "react";
import "../../styles/destinations/Maui.css";
import mauiImage from "../../assets/maui.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Maui = () => {
  return (
    <div className="maui-container">
      <h1 className="maui-heading">Maui</h1>
      <p className="maui-subtitle">
        From exploring the summit of Haleakalā to the serene beaches of Lanai,
        Maui provides an enchanting island experience filled with adventure and
        relaxation.
      </p>

      <img src={mauiImage} alt="Maui Landscape" className="maui-image" />

      <div className="maui-content">
        <h2>Maui Travel Guide</h2>
        <p>
          Maui, known as the "Valley Isle," captivates visitors with its
          world-famous beaches, the majestic Hana Highway, the sacred Iao
          Valley, and the awe-inspiring Haleakalā National Park. It's an island
          that invites adventurers, romantics, and families alike to explore its
          natural wonders and indulge in its luxurious resorts.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Haleakalā National Park:</strong> Witness the breathtaking
            sunrise atop the Haleakalā volcano, and explore the park's
            otherworldly landscapes.
          </li>
          <li>
            <strong>Road to Hana:</strong> A scenic drive through lush forests
            and along the coast, featuring waterfalls, hiking trails, and
            stunning viewpoints.
          </li>
          <li>
            <strong>Lahaina Town & Banyan Tree:</strong> Discover Maui's
            historic whaling village with its vibrant art scene, restaurants,
            and the iconic Banyan Tree.
          </li>
          <li>
            <strong>Molokini Crater:</strong> A partially submerged volcanic
            crater offering some of the best snorkeling in Hawaii with
            crystal-clear waters and abundant marine life.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Wailea Beach:</strong> Golden sand, luxury resorts, and
            excellent snorkeling await at this south Maui gem.
          </li>
          <li>
            <strong>Iao Valley State Park:</strong> A lush valley filled with
            history and natural beauty.
          </li>
          <li>
            <strong>Maui Ocean Center:</strong> A modern aquarium showcasing
            Hawaiian marine life.
          </li>
          <li>
            <strong>Upcountry Maui:</strong> Enjoy farms, gardens, and paniolo
            (cowboy) culture in Makawao and Kula.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Lanai Island:</strong> A quick ferry ride opens up secluded
            beaches and luxurious tranquility.
          </li>
          <li>
            <strong>Moloka'i Island:</strong> Known for its authentic Hawaiian
            lifestyle and sea cliffs.
          </li>
          <li>
            <strong>Pā'ia & Ho'okipa:</strong> Perfect for shopping,
            people-watching, and surfing action.
          </li>
          <li>
            <strong>Twin Falls:</strong> A short hike to waterfalls, pools, and
            jungle trails—great first stop on the Hana Highway.
          </li>
        </ul>

        <h2>Map of Maui</h2>
        <div className="maui-map">
          <iframe
            title="Map of Maui"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376350.308010086!2d-157.0227860372817!3d20.798363029776714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954b59d4f8fdfc1%3A0x6f59dba7a97d5c58!2sMaui%2C%20Hawaii%2C%20USA!5e0!3m2!1sen!2sin!4v1719044444444!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h2>Accommodations</h2>
        <p>
          From luxurious beachfront resorts in Wailea and Ka'anapali to rustic
          upcountry retreats, Maui offers a wide range of stays. Whether you're
          seeking full-service luxury or laid-back local charm, there’s
          something for every traveler.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Fly into Kahului Airport (OGG), the
            island’s main air hub.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> April to November offers warm
            weather with fewer crowds.
          </li>
          <li>
            <strong>Transportation:</strong> Renting a car is strongly
            recommended to explore Maui's attractions.
          </li>
          <li>
            <strong>Currency & Language:</strong> US Dollar; English and
            Hawaiian are the official languages.
          </li>
        </ul>

        <p>
          For more information and trip planning, visit the official tourism
          site:{" "}
          <a
            href="https://www.gohawaii.com/islands/maui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go Hawaii - Maui
          </a>
        </p>

        <p>
          Whether you're gazing into a volcanic crater, navigating hairpin turns
          to hidden waterfalls, or just soaking in the sunset over the Pacific,
          Maui delivers a magical island experience.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Maui;
