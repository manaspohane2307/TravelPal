import React from "react";
import "../../styles/destinations/Madrid.css";
import madridImage from "../../assets/madrid.jpg"; // Ensure this image exists
import Footer from "../../components/Footer";

const Madrid = () => {
  return (
    <div className="madrid-container">
      <h1 className="madrid-heading">Madrid</h1>
      <p className="madrid-subtitle">
        Bask in the Spanish sun in Madrid, a lively capital boasting grandiose
        architecture, verdant parks, and a passion for football, all infused
        with the soulful tempo of flamenco.
      </p>

      <img src={madridImage} alt="Madrid City View" className="madrid-image" />

      <div className="madrid-content">
        <h2>Madrid Travel Guide</h2>
        <p>
          Welcome to Madrid, the vibrant capital of Spain, where tradition and
          modernity blend seamlessly amidst sun-soaked plazas, world-class art,
          and culinary delights. Our Madrid Travel Guide will help you discover
          the soul of this captivating city.
        </p>

        <h2>Madrid's Illustrious Art Scene</h2>
        <ul>
          <li>
            <strong>Prado Museum:</strong> Explore masterpieces from Goya,
            Velázquez, and more at Spain’s most famous art museum.
          </li>
          <li>
            <strong>Reina Sofía Museum:</strong> Discover modern art gems like
            Picasso's <em>Guernica</em>.
          </li>
          <li>
            <strong>Thyssen-Bornemisza Museum:</strong> Journey through
            centuries of European art with a diverse and dynamic collection.
          </li>
        </ul>

        <h2>Cultural Landmarks and Historic Squares</h2>
        <ul>
          <li>
            <strong>Puerta del Sol:</strong> The symbolic center of Madrid,
            perfect for people-watching and landmark spotting.
          </li>
          <li>
            <strong>Plaza Mayor:</strong> A grand historic square lined with
            arcades and full of charm.
          </li>
          <li>
            <strong>Gran Vía:</strong> A vibrant boulevard buzzing with
            theaters, shopping, and iconic buildings.
          </li>
        </ul>

        <h2>Salamanca: Sophistication and Style</h2>
        <ul>
          <li>
            <strong>High-End Shopping:</strong> Stroll Serrano and Ortega y
            Gasset for luxury brands.
          </li>
          <li>
            <strong>Architectural Elegance:</strong> Admire ornate 19th-century
            facades and upscale townhouses.
          </li>
          <li>
            <strong>Cultural Institutions:</strong> Visit the National
            Archaeological Museum or Lázaro Galdiano Museum.
          </li>
        </ul>

        <h2>Madrid’s Lush Escapes</h2>
        <ul>
          <li>
            <strong>Retiro Park:</strong> A beloved green haven featuring a
            boating lake and the majestic Crystal Palace.
          </li>
          <li>
            <strong>Casa de Campo:</strong> A vast park with a zoo, cable car,
            and natural trails.
          </li>
          <li>
            <strong>Madrid Río:</strong> Scenic river paths ideal for walking,
            jogging, or biking.
          </li>
        </ul>

        <h2>Map of Madrid</h2>
        <div className="madrid-map">
          <iframe
            title="Map of Madrid"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.822374497794!2d-3.703790684602721!3d40.41677597936492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289d1b6d8c6f%3A0xf64f880af0dfb757!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sin!4v1719010000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h2>Gastronomic Delights</h2>
        <ul>
          <li>
            <strong>Mercado de San Miguel:</strong> A vibrant culinary market
            offering tapas, seafood, and more.
          </li>
          <li>
            <strong>Sobrino de Botín:</strong> Officially the world's oldest
            restaurant, famous for roasted meats.
          </li>
          <li>
            <strong>Chocolatería San Ginés:</strong> Indulge in churros con
            chocolate at this iconic late-night café.
          </li>
        </ul>

        <h2>Madrid After Sundown</h2>
        <ul>
          <li>
            <strong>La Latina:</strong> Explore bustling tapas bars and
            atmospheric plazas.
          </li>
          <li>
            <strong>Huertas:</strong> Dive into Madrid’s literary and nightlife
            legacy in this cultural quarter.
          </li>
        </ul>

        <h2>Traveler's Essentials</h2>
        <ul>
          <li>
            <strong>Transport:</strong> The Madrid Metro is fast, affordable,
            and extensive.
          </li>
          <li>
            <strong>Best Visit Times:</strong> Spring (March–May) and Fall
            (September–November) offer ideal weather.
          </li>
          <li>
            <strong>Language:</strong> Spanish is the official language. English
            is spoken in most tourist areas, but learning a few phrases helps a
            lot.
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Madrid;
