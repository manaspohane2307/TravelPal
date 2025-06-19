import React from "react";
import "../../styles/destinations/Barcelona.css";
import barcelonaImage from "../../assets/barcelona.jpg"; // Ensure this image is in your assets
import Footer from "../../components/Footer";

const Barcelona = () => {
  return (
    <div className="barcelona-container">
      <h1 className="barcelona-heading">Barcelona</h1>

      <p className="barcelona-quote">
        Barcelona’s mesmerizing fusion of the old and new, coupled with its
        artistic legacy and beachside charm, makes it an unparalleled
        destination for travelers seeking a memorable getaway.
      </p>

      <img
        src={barcelonaImage}
        alt="Barcelona"
        className="barcelona-main-image"
      />

      <div className="barcelona-content">
        <h2>Barcelona Travel Guide</h2>
        <p>
          Barcelona, a city where the vibrancy of culture, the richness of
          history, and the warmth of the Mediterranean merge, invites travelers
          to discover its unique blend of modernist architecture, delectable
          cuisine, and lively streets. From the awe-inspiring works of Gaudí to
          the bustling la Rambla, every corner of Barcelona promises an
          enchanting experience.
        </p>

        <h2>Essential Highlights</h2>
        <ul>
          <li>
            <strong>Sagrada Familia:</strong> Gaudí’s iconic basilica with
            stunning architecture and spiritual depth.
          </li>
          <li>
            <strong>Park Güell:</strong> A colorful mosaic wonderland offering
            panoramic city views.
          </li>
          <li>
            <strong>Gothic Quarter:</strong> Narrow medieval streets, plazas,
            and Gothic architecture around every turn.
          </li>
          <li>
            <strong>La Rambla:</strong> Barcelona’s vibrant pedestrian street
            lined with shops, cafes, and street artists.
          </li>
        </ul>

        {/* Map */}
        <div className="barcelona-map">
          <h2>Map of Barcelona</h2>
          <iframe
            title="Barcelona Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.001434410726!2d2.1679850156815783!3d41.38289387926374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f001af9cc3%3A0x74e1705a05d4ce7!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1750482700000!5m2!1sen!2sin"
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
            <strong>Picasso Museum:</strong> Explore Picasso’s early work in
            five connected medieval palaces.
          </li>
          <li>
            <strong>Montjuïc Hill:</strong> Home to the Magic Fountain, art
            museums, and stunning vistas.
          </li>
          <li>
            <strong>Camp Nou:</strong> Tour the legendary FC Barcelona stadium
            and museum.
          </li>
        </ul>

        <h2>Popular Day Trips</h2>
        <ul>
          <li>
            <strong>Montserrat:</strong> Mountain escape with an abbey, trails,
            and magnificent views.
          </li>
          <li>
            <strong>Sitges:</strong> Quaint coastal town with beaches, culture,
            and nightlife.
          </li>
          <li>
            <strong>Girona:</strong> Medieval charm, Jewish Quarter, and
            historic city walls.
          </li>
          <li>
            <strong>Figueres:</strong> Home to Dalí’s surreal museum experience
            in his birthplace.
          </li>
        </ul>

        <h2>Accommodations</h2>
        <p>
          Whether you're after five-star luxury, cozy boutique hotels, or budget
          hostels, Barcelona delivers. Popular areas include the Gothic Quarter,
          Eixample, and the beachfront district of Barceloneta.
        </p>

        <h2>Helpful Tips</h2>
        <ul>
          <li>
            <strong>Getting There:</strong> Arrive via Barcelona-El Prat
            Airport, only 13 km from the city.
          </li>
          <li>
            <strong>Best Time to Visit:</strong> May–June and September–October
            for great weather and smaller crowds.
          </li>
          <li>
            <strong>Transportation:</strong> Use metro, tram, and bus systems;
            the Hola Barcelona card offers unlimited rides.
          </li>
          <li>
            <strong>Languages and Currency:</strong> Catalan and Spanish are
            official; currency is Euro (€).
          </li>
          <li>
            <strong>Safety:</strong> Stay alert in tourist-heavy areas to avoid
            pickpocketing. Late dinners and tapas hopping are part of local
            culture.
          </li>
        </ul>

        <p>
          For official travel info, visit the{" "}
          <a href="https://www.spain.info/en/" target="_blank" rel="noreferrer">
            Spain tourism website
          </a>
          .
        </p>

        <p>
          Barcelona’s colorful streets, beachfront charm, and artistic soul
          create a travel experience like no other. Come ready to be amazed,
          inspired, and fully immersed in this Catalonian gem.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Barcelona;
