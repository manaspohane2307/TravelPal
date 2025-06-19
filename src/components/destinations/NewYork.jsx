import React from "react";
import "../../styles/destinations/NewYork.css";
import newYorkImage from "../../assets/newyork.jpg"; // Update with actual image path
import Footer from "../../components/Footer";

const NewYork = () => {
  return (
    <div className="newyork-container">
      <h1 className="newyork-heading">New York City</h1>
      <p className="newyork-quote">
        “The city that never sleeps — where dreams, diversity, and dynamism
        collide.”
      </p>

      <img src={newYorkImage} alt="New York City" className="newyork-image" />

      <div className="newyork-content">
        <h2>New York City Travel Guide</h2>
        <p>
          New York City, the bustling metropolis known as "The Big Apple," is a
          global hub of culture, art, fashion, and gastronomy. This iconic city
          is home to landmarks like Times Square, the Statue of Liberty, and
          Central Park. Its vibrant energy and diversity make it a must-visit
          destination for travelers from around the world.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Statue of Liberty & Ellis Island:</strong> Symbols of hope
            and freedom — take a ferry and explore their rich history.
          </li>
          <li>
            <strong>Central Park:</strong> 843 acres of green in the middle of
            Manhattan, perfect for picnics, walks, or boating.
          </li>
          <li>
            <strong>The Metropolitan Museum of Art:</strong> Explore 5,000 years
            of art from every corner of the globe.
          </li>
          <li>
            <strong>Broadway:</strong> Experience world-class theater
            performances and musicals in the famous theater district.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Empire State Building:</strong> Iconic skyscraper offering
            360° views of NYC.
          </li>
          <li>
            <strong>Times Square:</strong> Neon-lit central hub full of
            entertainment, shops, and food.
          </li>
          <li>
            <strong>One World Observatory & 9/11 Memorial:</strong> Reflect at
            the memorial pools and enjoy city views from the tallest building in
            the Western Hemisphere.
          </li>
          <li>
            <strong>Museum of Modern Art (MoMA):</strong> See works by Van Gogh,
            Warhol, Picasso, and more.
          </li>
        </ul>

        <h2>Live Events & Attractions</h2>
        <ul>
          <li>
            <strong>New York Film Festival:</strong> Premieres and screenings at
            Lincoln Center.
          </li>
          <li>
            <strong>New York Fashion Week:</strong> A biannual celebration of
            fashion and design.
          </li>
          <li>
            <strong>Macy’s Thanksgiving Day Parade:</strong> Iconic parade with
            balloons, performances, and holiday cheer.
          </li>
          <li>
            <strong>New Year’s Eve in Times Square:</strong> Witness the ball
            drop live or from a nearby rooftop lounge.
          </li>
        </ul>

        <h2>Dining & Top Restaurants</h2>
        <ul>
          <li>
            <strong>Le Bernardin:</strong> Elegant French seafood with three
            Michelin stars.
          </li>
          <li>
            <strong>Katz’s Delicatessen:</strong> Legendary deli known for its
            massive pastrami sandwiches.
          </li>
          <li>
            <strong>Momofuku Noodle Bar:</strong> Trendy Asian-fusion cuisine
            with a cult following.
          </li>
          <li>
            <strong>Di Fara Pizza:</strong> A Brooklyn institution for authentic
            NY-style pizza.
          </li>
        </ul>

        <h2>Where to Stay</h2>
        <p>
          From luxury hotels in Manhattan like The Plaza and The Standard to
          cozy B&Bs and hostels in Brooklyn and Queens, New York City
          accommodates all budgets. Consider Midtown for proximity to
          attractions or Williamsburg for local culture.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Airports:</strong> JFK, LaGuardia (LGA), and Newark (EWR)
            all serve NYC with major domestic and international flights.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> Spring (April–June) and fall
            (Sept–Nov) offer mild weather and great sightseeing conditions.
          </li>
          <li>
            <strong>Getting Around:</strong> The subway (MTA) is the most
            efficient way to travel; get a MetroCard for convenience.
          </li>
          <li>
            <strong>Language & Currency:</strong> English is widely spoken.
            Currency is the U.S. Dollar (USD).
          </li>
        </ul>

        <h2>Map of New York City</h2>
        <div className="newyork-map">
          <iframe
            title="Map of NYC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43870091944!2d-74.11808505070848!3d40.7058316425247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xb73f2f7b59c0497!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1719090000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          From skyscrapers to subways, Broadway to Brooklyn, New York City
          dazzles at every corner. It's a destination that must be experienced
          to be believed — no matter how many times you visit, NYC always has
          something new to offer.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default NewYork;
