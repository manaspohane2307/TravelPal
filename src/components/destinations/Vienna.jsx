import React from "react";
import "../../styles/destinations/Vienna.css";
import viennaImage from "../../assets/vienna.jpg"; // Use .webp if available
import Footer from "../../components/Footer";

const Vienna = () => {
  return (
    <div className="vienna-container">
      <h1 className="vienna-heading">Vienna</h1>
      <p className="vienna-quote">
        “A city where imperial elegance meets cultural brilliance.”
      </p>

      <img src={viennaImage} alt="Vienna City View" className="vienna-image" />

      <div className="vienna-content">
        <h2>Vienna Travel Guide</h2>
        <p>
          Welcome to the elegant city of Vienna, Austria's capital. Known for
          its imperial palaces, artistic and intellectual legacy, and charming
          coffee-house culture, Vienna effortlessly weaves the historic with the
          modern.
        </p>

        <h2>How to Get There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> Vienna International Airport (VIE), located
            just outside the city, is well-connected globally.
          </li>
          <li>
            <strong>By Train:</strong> Hauptbahnhof (central station) offers
            services across Europe.
          </li>
          <li>
            <strong>By Road:</strong> Vienna is accessible via Austria’s
            extensive motorway (Autobahn) network and long-distance buses.
          </li>
        </ul>

        <h2>Best Time to Visit</h2>
        <ul>
          <li>
            <strong>Spring (Mar–May):</strong> Mild and colorful, ideal for
            walks and park visits.
          </li>
          <li>
            <strong>Summer (Jun–Aug):</strong> Vibrant and full of festivals,
            but crowded.
          </li>
          <li>
            <strong>Autumn (Sep–Nov):</strong> Golden foliage, pleasant weather,
            and fewer tourists.
          </li>
          <li>
            <strong>Winter (Dec–Feb):</strong> Magical markets, classical
            concerts, and cozy cafés.
          </li>
        </ul>

        <h2>Top Attractions</h2>
        <ul>
          <li>
            <strong>Schönbrunn Palace:</strong> Baroque palace with elaborate
            gardens and opulent rooms.
          </li>
          <li>
            <strong>St. Stephen's Cathedral:</strong> Gothic icon with a
            colorful tile roof and tower views.
          </li>
          <li>
            <strong>Belvedere Palace:</strong> Home to Klimt’s “The Kiss” and
            baroque architecture.
          </li>
          <li>
            <strong>Prater & Giant Ferris Wheel:</strong> Family-friendly fun
            and scenic rides.
          </li>
          <li>
            <strong>Vienna State Opera:</strong> World-class performances in a
            grand setting.
          </li>
        </ul>

        <h2>Museums and Cultural Sites</h2>
        <ul>
          <li>
            <strong>Kunsthistorisches Museum:</strong> Art by Vermeer, Titian,
            and more.
          </li>
          <li>
            <strong>Albertina:</strong> Master drawings and modern exhibitions.
          </li>
          <li>
            <strong>Museum of Natural History:</strong> Fascinating collections
            for all ages.
          </li>
        </ul>

        <h2>Food and Drink</h2>
        <ul>
          <li>
            <strong>Café Central:</strong> Elegant historic café with delicious
            cakes and coffees.
          </li>
          <li>
            <strong>Naschmarkt:</strong> Lively market with global cuisine and
            fresh produce.
          </li>
          <li>
            <strong>Plachutta:</strong> Must-try for Tafelspitz (boiled beef
            delicacy).
          </li>
        </ul>

        <h2>Day Trips</h2>
        <ul>
          <li>
            <strong>Salzburg:</strong> Visit Mozart’s birthplace and Sound of
            Music sites.
          </li>
          <li>
            <strong>Bratislava:</strong> Explore Slovakia’s capital just a short
            ride away.
          </li>
        </ul>

        <h2>Live Events</h2>
        <ul>
          <li>
            <strong>Vienna Opera Ball:</strong> A glamorous annual event in the
            Opera House.
          </li>
          <li>
            <strong>Vienna Festival:</strong> Celebrating the arts with music,
            theatre, and dance.
          </li>
        </ul>

        <p>
          Vienna seamlessly entwines the past and present, inviting visitors to
          experience its compelling rhythm of culture, history, and vibrancy.
          Don’t forget to enjoy a slice of Sacher Torte, sip Viennese coffee,
          and attend a classical concert in a grand hall.
        </p>

        <h2>Map of Vienna</h2>
        <div className="vienna-map">
          <iframe
            title="Vienna Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10695.22254161426!2d16.3652329!3d48.2081745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079f511bae9d%3A0x400fefc86161c10!2sVienna%2C%20Austria!5e0!3m2!1sen!2sin!4v1719222222222!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vienna;
