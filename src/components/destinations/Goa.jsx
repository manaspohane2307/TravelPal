import React from "react";
import "../../styles/destinations/Goa.css";
import goaImage from "../../assets/goa.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Goa = () => {
  return (
    <div className="goa-container">
      <h1 className="goa-heading">Goa</h1>

      <p className="goa-tagline">
        Goa, the smallest state in India, is a stunning fusion of Indian and
        Portuguese culture, best known for its beautiful golden-sand beaches,
        vivacious nightlife, delightful cuisine and iconic architectural relics.
      </p>

      <img src={goaImage} alt="Goa Beach" className="goa-main-image" />

      <div className="goa-content">
        <h2>Travel Guide to Goa, India</h2>
        <p>
          Goa, a coastal state along the Arabian Sea in western India, resonates
          with the vibrancy of its Portuguese heritage, stunning beaches, and a
          never-ending nightlife. Renowned for its spice-laden cuisine,
          laid-back lifestyle, and historical landmarks, Goa offers a unique
          blend of Indian and Portuguese cultures, making it a fascinating
          destination for travelers seeking relaxation, adventure, and cultural
          experiences.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Beaches:</strong> From vibrant Calangute and Baga to serene
            Agonda and Mandrem, Goa's beaches offer something for everyone.
          </li>
          <li>
            <strong>Historical Landmarks:</strong> Visit Aguada Fort and the
            UNESCO-listed Basilica of Bom Jesus in Old Goa.
          </li>
          <li>
            <strong>Goan Cuisine:</strong> Don’t miss Goan Fish Curry, Bebinca
            dessert, and the local cashew or coconut-based Feni.
          </li>
          <li>
            <strong>Water Sports:</strong> Try parasailing, jet-skiing, or
            windsurfing at Anjuna, Colva, and other beaches.
          </li>
        </ul>

        <h2>Top Destinations</h2>
        <ul>
          <li>
            <strong>Panjim:</strong> Visit the capital's colorful streets and
            the Mandovi River promenade.
          </li>
          <li>
            <strong>Old Goa:</strong> Home to grand cathedrals and churches
            showcasing Portuguese influence.
          </li>
          <li>
            <strong>Anjuna:</strong> Known for flea markets and full moon beach
            parties.
          </li>
          <li>
            <strong>Dudhsagar Falls:</strong> A majestic four-tier waterfall
            ideal for nature lovers and trekkers.
          </li>
        </ul>

        <h2>Popular Things to Do</h2>
        <ul>
          <li>
            <strong>Night Market Tour:</strong> Discover Arpora’s Saturday night
            bazaar for shopping and food.
          </li>
          <li>
            <strong>Mandovi River Cruise:</strong> Take a sunset cruise with
            music and traditional Goan dance.
          </li>
          <li>
            <strong>Bhagwan Mahavir Wildlife Sanctuary:</strong> Explore Goa’s
            largest wildlife sanctuary by safari.
          </li>
          <li>
            <strong>Dudhsagar Waterfalls Excursion:</strong> A scenic day trip
            with trekking and photography.
          </li>
        </ul>

        <h2>Accommodations</h2>
        <p>
          From luxurious beachfront resorts in Calangute and Candolim to budget
          hostels in Vagator and guesthouses in South Goa, there's something for
          every traveler. Whether you're seeking nightlife, wellness retreats,
          or peaceful stays, Goa offers a perfect fit.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Best Time to Visit:</strong> November to February offers
            cool and pleasant weather ideal for beaches and festivals.
          </li>
          <li>
            <strong>Getting There:</strong> Goa International Airport (Dabolim)
            connects with major cities in India and abroad.
          </li>
          <li>
            <strong>Transportation:</strong> Rent a scooter or motorbike for
            flexible travel. Public buses and taxis are also available.
          </li>
          <li>
            <strong>Cultural Etiquette:</strong> Dress modestly at churches and
            temples. Respect local customs and communities.
          </li>
          <li>
            <strong>Connectivity:</strong> Most areas have Wi-Fi, but getting a
            local SIM card is useful for navigation and bookings.
          </li>
        </ul>

        <h2>Map of Goa</h2>
        <div className="goa-map">
          <iframe
            title="Map of Goa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15148.137011685617!2d73.75183286574465!3d15.299326350208337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0ab8b0b6533%3A0x9fc80a79676004de!2sGoa!5e0!3m2!1sen!2sin!4v1718922000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p>
          Goa is more than a destination—it’s an experience. Whether you seek
          thrilling adventures, tranquil beaches, rich cultural history, or the
          perfect party, Goa caters to every traveler's spirit.
        </p>

        <p>
          For more information, visit the official tourism portal at{" "}
          <a
            href="https://www.incredibleindia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Incredible India
          </a>
          .
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Goa;
