import React from "react";
import "../../styles/blogs/Blog3.css";
import blog3Img from "../../assets/blogs/blog3.jpg";
import Footer from "../../components/Footer";

const Blog3 = () => {
  return (
    <div className="blog3-container">
      <img src={blog3Img} alt="Budget Travel Hacks" className="blog3-banner" />
      <h1 className="blog3-title">Budget Travel Hacks</h1>

      <div className="blog3-content">
        <h2>💸 Travel Doesn’t Have to Be Expensive</h2>
        <p>
          With a little planning and creativity, you can explore the world
          without breaking the bank. Here are some tried-and-tested hacks to
          help you travel more for less.
        </p>

        <h2>✈️ Save on Flights</h2>
        <ul>
          <li>
            Use flight comparison tools like Skyscanner, Google Flights, or
            Hopper.
          </li>
          <li>
            Travel during off-peak seasons and book mid-week for lower fares.
          </li>
          <li>Be flexible with your dates and destinations to find deals.</li>
          <li>Use incognito mode to avoid dynamic pricing.</li>
        </ul>

        <h2>🏨 Budget-Friendly Accommodations</h2>
        <ul>
          <li>Stay in hostels, budget hotels, or shared Airbnbs.</li>
          <li>
            Consider house-sitting or work-exchange platforms like Workaway.
          </li>
          <li>
            Use hotel loyalty programs or credit card points for free stays.
          </li>
        </ul>

        <h2>🍜 Eat Like a Local</h2>
        <ul>
          <li>
            Skip touristy restaurants — opt for street food or local diners.
          </li>
          <li>Shop at local markets and cook your own meals occasionally.</li>
          <li>Use apps like Too Good To Go for discounted leftover food.</li>
        </ul>

        <h2>🚆 Transport Hacks</h2>
        <ul>
          <li>
            Use public transportation passes or city cards for unlimited rides.
          </li>
          <li>Walk or rent bikes to explore cities cheaply and actively.</li>
          <li>
            Book long-distance buses or trains in advance for better prices.
          </li>
        </ul>

        <h2>🎟️ Free Attractions & Activities</h2>
        <ul>
          <li>Take advantage of free museum days and city walking tours.</li>
          <li>
            Explore parks, historic sites, and cultural events open to all.
          </li>
          <li>Download offline guides or maps to avoid roaming charges.</li>
        </ul>

        <h2>📱 Must-Have Budget Travel Apps</h2>
        <ul>
          <li>
            <strong>Rome2Rio</strong> – Find cheap transport options between
            cities.
          </li>
          <li>
            <strong>Skyscanner</strong> – For flight deals.
          </li>
          <li>
            <strong>Hostelworld</strong> – Compare budget stays.
          </li>
          <li>
            <strong>XE Currency</strong> – Real-time currency conversion.
          </li>
        </ul>

        <h2>🧠 Mindset Matters</h2>
        <p>
          Budget travel isn't about cutting corners — it’s about being
          resourceful, prioritizing experiences, and making smart choices.
          You'll return home with richer stories, not an emptier wallet.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog3;
