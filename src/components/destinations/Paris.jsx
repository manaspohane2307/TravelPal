import React from "react";
import "../../styles/destinations/Paris.css";
import parisImage from "../../assets/paris.jpg"; // Replace with correct path
import Footer from "../../components/Footer";

const Paris = () => {
  return (
    <div className="paris-container">
      <h1 className="paris-heading">Paris</h1>
      <p className="paris-quote">
        “Surrender to the romantic allure of Paris, the City of Light, where the
        Eiffel Tower, world-class museums, and charming cafes create an
        enchanting escape steeped in art and <i>joie de vivre</i>.”
      </p>

      <img src={parisImage} alt="Paris" className="paris-image" />

      <div className="paris-content">
        <h2>Your Guide to Paris, France</h2>
        <p>
          Welcome to the City of Light, where romance, culture, and history
          blend seamlessly. Paris, the capital of France, is a travel
          destination par excellence, drawing millions of visitors each year
          with its unrivaled charms. From the iconic Eiffel Tower to the
          majestic Louvre Museum, each corner of Paris offers a unique slice of
          French <i>art de vivre</i>.
        </p>

        <h2>Iconic Landmarks</h2>
        <ul>
          <li>
            <strong>Eiffel Tower:</strong> Book your ticket in advance to enjoy
            the breathtaking views from the top of this world-famous iron
            structure.
          </li>
          <li>
            <strong>Louvre Museum:</strong> The world’s largest art museum and
            home to the Mona Lisa and countless other masterpieces.
          </li>
          <li>
            <strong>Notre-Dame Cathedral:</strong> While under restoration, its
            magnificent Gothic facade still draws admiration from visitors.
          </li>
        </ul>

        <h2>Enchanting Neighborhoods</h2>
        <ul>
          <li>
            <strong>Montmartre:</strong> A bohemian hilltop district famous for
            its art history and the Basilica of the Sacré-Cœur.
          </li>
          <li>
            <strong>Le Marais:</strong> Historic and trendy, filled with
            boutiques, galleries, and lively cafes.
          </li>
          <li>
            <strong>Saint-Germain-des-Prés:</strong> Known for literary
            landmarks, elegant shops, and stylish cafes.
          </li>
        </ul>

        <h2>Museums and Culture</h2>
        <ul>
          <li>
            <strong>Musée d'Orsay:</strong> Houses Impressionist and
            Post-Impressionist art in a converted train station.
          </li>
          <li>
            <strong>Centre Pompidou:</strong> Modern and contemporary art museum
            with a futuristic architectural style.
          </li>
          <li>
            <strong>Palais Garnier:</strong> The opulent opera house that
            inspired “The Phantom of the Opera.”
          </li>
        </ul>

        <h2>Dining and Gastronomy</h2>
        <ul>
          <li>
            <strong>Le Cinq:</strong> A Michelin-starred fine-dining experience
            inside the Four Seasons Hotel George V.
          </li>
          <li>
            <strong>Bouillon Chartier:</strong> A century-old Parisian brasserie
            offering classic dishes at great value.
          </li>
          <li>
            <strong>Sidewalk Cafés:</strong> Enjoy croissants and coffee while
            watching the world go by.
          </li>
        </ul>

        <h2>Parks and Nature</h2>
        <ul>
          <li>
            <strong>Jardin des Tuileries:</strong> Stroll these historic gardens
            connecting the Louvre and Place de la Concorde.
          </li>
          <li>
            <strong>Luxembourg Gardens:</strong> Relax in one of Paris’s most
            beloved public parks.
          </li>
          <li>
            <strong>Bois de Boulogne:</strong> A vast park perfect for outdoor
            activities and home to the Fondation Louis Vuitton.
          </li>
        </ul>

        <h2>Shopping and Fashion</h2>
        <ul>
          <li>
            <strong>Galeries Lafayette:</strong> Luxury department store with a
            stunning stained-glass dome.
          </li>
          <li>
            <strong>Le Bon Marché:</strong> Paris’s oldest department store,
            known for fashion and gourmet goods.
          </li>
          <li>
            <strong>Champs-Élysées:</strong> A famed shopping street with global
            brands and a view of the Arc de Triomphe.
          </li>
        </ul>

        <h2>Tips and Practical Information</h2>
        <ul>
          <li>
            <strong>Getting Around:</strong> Purchase a Paris Visite Pass for
            unlimited use of the metro, buses, and RER trains.
          </li>
          <li>
            <strong>Language:</strong> French is the official language, though
            many people speak English in tourist areas.
          </li>
          <li>
            <strong>Currency:</strong> The Euro (€) is the local currency. Some
            small shops and cafes may prefer cash.
          </li>
        </ul>

        <h2>Map of Paris</h2>
        <div className="paris-map">
          <iframe
            title="Paris Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20908.40140460045!2d2.3093739500000002!3d48.8566964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdbeb6201f1%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1719100000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Whether you're wandering cobbled alleys in Montmartre, savoring
          pastries by the Seine, or marveling at architectural masterpieces,
          Paris is the embodiment of elegance and charm. Bon voyage!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Paris;
