import React from "react";
import "../../styles/destinations/Munich.css";
import munichImage from "../../assets/munich.jpg"; // Update with your actual image path
import Footer from "../../components/Footer";

const Munich = () => {
  return (
    <div className="munich-container">
      <h1 className="munich-heading">Munich, Germany</h1>
      <p className="munich-quote">
        “Where Bavarian tradition meets modern charm.”
      </p>

      <img src={munichImage} alt="Munich" className="munich-image" />

      <div className="munich-content">
        <h2>Munich Travel Guide</h2>
        <p>
          Welcome to Munich, the heart of Bavaria! This vibrant city seamlessly
          blends rich history with modern flair, offering attractions from
          world-famous beer gardens to cutting-edge museums. Whether you're a
          history buff, foodie, or outdoor enthusiast, Munich has something for
          everyone.
        </p>

        <h2>Getting There</h2>
        <ul>
          <li>
            <strong>By Air:</strong> Munich Airport is 35km from the city
            center, accessible via S8 and S1 S-Bahn trains (~45 minutes).
          </li>
          <li>
            <strong>By Train:</strong> Munich Hauptbahnhof connects you to
            German and European cities via Deutsche Bahn.
          </li>
          <li>
            <strong>By Bus:</strong> Flixbus and other services arrive at the
            Central Bus Station near the Hauptbahnhof.
          </li>
          <li>
            <strong>By Car:</strong> Drive via autobahns A8, A9, or A96
            depending on your route.
          </li>
        </ul>

        <h2>What to See and Do</h2>

        <h3>Historical & Cultural Attractions</h3>
        <ul>
          <li>
            <strong>Marienplatz & Neues Rathaus:</strong> See the iconic
            Glockenspiel and experience the lively city center.
          </li>
          <li>
            <strong>Nymphenburg Palace:</strong> Explore lavish rooms and
            stunning baroque gardens.
          </li>
          <li>
            <strong>Munich Residenz:</strong> Former royal palace now housing
            art, jewels, and royal chambers.
          </li>
        </ul>

        <h3>Museums & Galleries</h3>
        <ul>
          <li>
            <strong>Deutsches Museum:</strong> World’s largest museum of science
            & tech.
          </li>
          <li>
            <strong>Alte Pinakothek:</strong> European paintings from the
            14th–18th centuries.
          </li>
          <li>
            <strong>BMW Museum:</strong> Discover the brand's evolution and
            enjoy futuristic displays.
          </li>
        </ul>

        <h3>Parks & Outdoor</h3>
        <ul>
          <li>
            <strong>English Garden:</strong> One of the world’s largest urban
            parks – perfect for biking, picnicking, and watching surfers on the
            Eisbach.
          </li>
          <li>
            <strong>Olympic Park:</strong> Built for the 1972 Olympics – now
            used for concerts, walks, and lake boating.
          </li>
        </ul>

        <h3>Unique Experiences</h3>
        <ul>
          <li>
            <strong>Oktoberfest:</strong> Celebrate Bavarian beer culture with
            parades, music, and hearty food (late Sep–early Oct).
          </li>
          <li>
            <strong>Hofbräuhaus:</strong> Munich’s oldest beer hall with classic
            food and live music.
          </li>
        </ul>

        <h3>Day Trips</h3>
        <ul>
          <li>
            <strong>Neuschwanstein Castle:</strong> Disney’s inspiration –
            stunning mountain views and royal history.
          </li>
          <li>
            <strong>Dachau Memorial Site:</strong> A profound and sobering World
            War II site.
          </li>
        </ul>

        <h2>Dining & Nightlife</h2>
        <ul>
          <li>
            <strong>Viktualienmarkt:</strong> Outdoor market offering fresh
            local produce and Bavarian snacks.
          </li>
          <li>
            <strong>Schneider Bräuhaus:</strong> Traditional German dishes in an
            atmospheric beer hall.
          </li>
          <li>
            <strong>Gärtnerplatzviertel:</strong> Lively nightlife with bars,
            lounges, and music venues.
          </li>
        </ul>

        <h2>Shopping in Munich</h2>
        <ul>
          <li>
            <strong>Kaufingerstrasse:</strong> Main shopping street with global
            brands and local stores.
          </li>
          <li>
            <strong>Maximilianstrasse:</strong> High-end luxury fashion and
            designer boutiques.
          </li>
        </ul>

        <h2>Local Insights</h2>
        <ul>
          <li>
            <strong>Language:</strong> German (English widely spoken in tourist
            areas).
          </li>
          <li>
            <strong>Currency:</strong> Euro (€).
          </li>
          <li>
            <strong>Transport:</strong> MVV system with U-Bahn, S-Bahn, trams &
            buses.
          </li>
          <li>
            <strong>Safety:</strong> Very safe, but stay alert in crowded
            places.
          </li>
        </ul>

        <h2>Map of Munich</h2>
        <div className="munich-map">
          <iframe
            title="Map of Munich"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10610.258523952388!2d11.566146099999999!3d48.1371078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddfb39e3f4c2f%3A0x687f1e94f58b2f61!2sMunich%2C%20Germany!5e0!3m2!1sen!2sin!4v1719080000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Munich;
