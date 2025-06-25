import React from "react";
import "../../styles/blogs/Blog2.css";
import blog2Img from "../../assets/blogs/blog2.jpg";

const Blog2 = () => {
  return (
    <div className="blog2-container">
      <img src={blog2Img} alt="Solo Travel Tips" className="blog2-banner" />
      <h1 className="blog2-title">Solo Travel Tips</h1>

      <div className="blog2-content">
        <h2>🌍 Why Travel Solo?</h2>
        <p>
          Traveling solo can be one of the most empowering experiences in your
          life. It pushes you out of your comfort zone, builds confidence, and
          allows you to explore the world at your own pace.
        </p>

        <h2>🧭 Planning Your Solo Trip</h2>
        <ul>
          <li>
            Choose destinations known for solo traveler safety (e.g., Japan,
            Iceland, Portugal).
          </li>
          <li>
            Research visa requirements, currency, and local customs in advance.
          </li>
          <li>
            Book accommodations near city centers or well-connected areas.
          </li>
        </ul>

        <h2>🧳 Packing Essentials</h2>
        <ul>
          <li>Travel light with a backpack or carry-on size bag.</li>
          <li>Keep digital and physical copies of important documents.</li>
          <li>
            Pack a portable charger, travel lock, first-aid kit, and universal
            adapter.
          </li>
        </ul>

        <h2>👥 Meeting People on the Road</h2>
        <p>
          Solo travel doesn’t mean being alone all the time. There are many ways
          to meet people:
        </p>
        <ul>
          <li>Stay in hostels or social Airbnbs.</li>
          <li>Join group tours or local walking tours.</li>
          <li>
            Use apps like Meetup or Couchsurfing to connect with travelers or
            locals.
          </li>
        </ul>

        <h2>🔐 Staying Safe</h2>
        <ul>
          <li>Always let someone know your daily plan or location.</li>
          <li>
            Trust your instincts — avoid places or people that make you feel
            unsafe.
          </li>
          <li>
            Keep valuables secure and avoid flashy items that attract attention.
          </li>
          <li>Carry local emergency numbers and embassy details.</li>
        </ul>

        <h2>🧠 Mental Benefits of Solo Travel</h2>
        <p>
          Traveling alone teaches you resilience, adaptability, and
          self-awareness. You'll learn to enjoy your own company, make
          spontaneous decisions, and become more resourceful and independent.
        </p>

        <h2>🗓️ Start Small</h2>
        <p>
          If you're unsure, start with a short solo weekend getaway. Gain
          confidence gradually before attempting long international trips.
        </p>

        <h2>🎒 Final Thoughts</h2>
        <p>
          Solo travel is a journey of both the world and the self. With the
          right mindset and preparation, it can be life-changing and
          unforgettable.
        </p>
      </div>
    </div>
  );
};

export default Blog2;
