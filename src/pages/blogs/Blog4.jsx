import React from "react";
import "../../styles/blogs/Blog4.css";
import blog4Img from "../../assets/blogs/blog4.jpg";
import Footer from "../../components/Footer";

const Blog4 = () => {
  return (
    <div className="blog4-container">
      <img
        src={blog4Img}
        alt="Top Food Destinations"
        className="blog4-banner"
      />
      <h1 className="blog4-title">Top Food Destinations</h1>

      <div className="blog4-content">
        <h2>🍜 Discover the World Through Food</h2>
        <p>
          Food is one of the best ways to experience a culture. If you're a
          foodie traveler, these destinations should be at the top of your list!
        </p>

        <h2>🍣 Tokyo, Japan</h2>
        <ul>
          <li>Fresh sushi at Tsukiji Outer Market or local izakayas.</li>
          <li>Ramen varieties like shoyu, tonkotsu, and miso-based soups.</li>
          <li>Street snacks like takoyaki and yakitori in Shinjuku alleys.</li>
        </ul>

        <h2>🍕 Rome, Italy</h2>
        <ul>
          <li>
            Classic Roman pizza and pasta dishes like carbonara and amatriciana.
          </li>
          <li>
            Gelato shops around every corner — try pistachio and stracciatella!
          </li>
          <li>Visit Trastevere for authentic local trattorias.</li>
        </ul>

        <h2>🍛 Bangkok, Thailand</h2>
        <ul>
          <li>
            Vibrant street food markets offering pad thai, green curry, and
            mango sticky rice.
          </li>
          <li>Visit Chinatown (Yaowarat) for Chinese-Thai fusion dishes.</li>
          <li>Try boat noodles and Thai iced tea near the floating markets.</li>
        </ul>

        <h2>🥘 Barcelona, Spain</h2>
        <ul>
          <li>Taste tapas like patatas bravas, jamón, and croquettes.</li>
          <li>Try a seafood paella by the beach in Barceloneta.</li>
          <li>Visit La Boqueria Market for fresh fruits, meats, and sweets.</li>
        </ul>

        <h2>🌮 Mexico City, Mexico</h2>
        <ul>
          <li>Street tacos with al pastor, carnitas, or barbacoa fillings.</li>
          <li>
            Sample tamales, mole, and elote (grilled corn with cheese and lime).
          </li>
          <li>
            Explore food stalls at Mercado de San Juan and Coyoacán Market.
          </li>
        </ul>

        <h2>🍷 Bonus: Pair With Local Drinks</h2>
        <p>
          Complement meals with traditional drinks — sake in Japan, wine in
          Italy and Spain, Thai iced tea in Thailand, and mezcal in Mexico.
        </p>

        <h2>🧭 Final Bite</h2>
        <p>
          Food tells a story of place and people. These cities not only offer
          delicious bites but unforgettable culinary journeys. So next time you
          plan a trip, let your taste buds lead the way.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog4;
