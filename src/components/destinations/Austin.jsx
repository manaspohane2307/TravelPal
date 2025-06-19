import React from "react";
import "../../styles/destinations/Austin.css";
import austinImage from "../../assets/austin.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Austin = () => {
  return (
    <div className="austin-container">
      <h1 className="austin-heading">Austin</h1>

      <p className="austin-description">
        Embrace the laid-back yet buzzing atmosphere of Austin, where live music
        reverberates nightly and innovative cuisine awaits foodies along the
        Colorado River's scenic backdrop.
      </p>

      <img src={austinImage} alt="Austin, TX" className="austin-main-image" />

      <div className="austin-content">
        <h2>Travel Guide to Austin, TX</h2>
        <p>
          Austin, the vibrant capital of Texas, is renowned for its eclectic
          live-music scene, burgeoning culinary landscape, and a unique blend of
          urban and outdoor attractions. This dynamic city, nestled in the heart
          of Texas Hill Country, exudes a youthful energy, fostering a spirited
          community that prides itself on its motto, "Keep Austin Weird."
          Austin's appeal lies in its ability to offer a little something for
          everyone, from outdoor enthusiasts and food lovers to music
          aficionados and tech-savvy individuals.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Live Music:</strong> Dubbed the "Live Music Capital of the
            World," Austin boasts venues like The Continental Club and Antone’s
            Nightclub offering performances spanning various genres.
          </li>
          <li>
            <strong>Outdoor Activities:</strong> Enjoy kayaking on Lady Bird
            Lake, hiking in the Barton Creek Greenbelt, and witnessing the
            Congress Avenue Bridge bats.
          </li>
          <li>
            <strong>Food Scene:</strong> From Franklin Barbecue to gourmet food
            trucks and farm-to-table gems, Austin satisfies every palate.
          </li>
          <li>
            <strong>Festivals:</strong> Major events like SXSW and Austin City
            Limits draw global crowds for music, film, and tech showcases.
          </li>
        </ul>

        {/* Google Map Embed */}
        <div className="austin-map">
          <h2>Austin, TX on the Map</h2>
          <iframe
            title="Austin TX Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55351.91504330217!2d-97.77950612167819!3d30.307332273702837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50b1ae5f1e5%3A0xf76f274ad1b334f8!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1750459043082!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Texas State Capitol:</strong> A historic building offering
            tours that dive into Texas history.
          </li>
          <li>
            <strong>South Congress Avenue (SoCo):</strong> Trendy shops, iconic
            eats, and vibrant street life.
          </li>
          <li>
            <strong>Zilker Park:</strong> A 351-acre haven with Barton Springs
            Pool and open-air events.
          </li>
          <li>
            <strong>The University of Texas at Austin:</strong> Visit the
            Blanton Museum and LBJ Library.
          </li>
        </ul>

        <h2>Nightlife and Entertainment</h2>
        <p>As the sun sets, Austin’s nightlife awakens with energy:</p>
        <ul>
          <li>
            <strong>East Sixth Street:</strong> Famous for its bars, music
            clubs, and party vibes.
          </li>
          <li>
            <strong>Rainey Street:</strong> A lively strip of bungalows turned
            into bars and patios.
          </li>
        </ul>

        <h2>Accommodations</h2>
        <p>
          From downtown luxury hotels to cozy bed-and-breakfasts and
          eco-friendly hostels, Austin’s stay options reflect the city's
          personality — unique, diverse, and welcoming.
        </p>

        <h2>Helpful Tips for Visiting Austin</h2>
        <ul>
          <li>
            <strong>Best Time to Visit:</strong> Spring and fall offer the best
            weather and festival lineups.
          </li>
          <li>
            <strong>Getting There:</strong> Austin-Bergstrom International
            Airport has major U.S. and international connections.
          </li>
          <li>
            <strong>Transportation:</strong> Walkable downtown, rideshares,
            Capital Metro buses, and bike rentals make travel easy.
          </li>
          <li>
            <strong>Local Cuisine:</strong> Try Texas BBQ, breakfast tacos, and
            the food truck scene for authentic flavor.
          </li>
          <li>
            <strong>Outdoor Etiquette:</strong> Follow Leave No Trace principles
            when exploring parks and lakes.
          </li>
        </ul>

        <p>
          Visit the official tourism website at{" "}
          <a
            href="https://www.austintexas.org"
            target="_blank"
            rel="noreferrer"
          >
            Visit Austin
          </a>{" "}
          for more guides, events, and travel tools.
        </p>

        <p>
          Austin's welcoming atmosphere and vibrant community make it an
          unforgettable destination. Whether you're here to taste the flavors,
          hear the sounds, or soak in the sunshine, Austin promises an
          experience that's as unique as the city itself.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Austin;
