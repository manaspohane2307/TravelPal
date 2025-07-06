import React from "react";
import "../../../styles/cards/maldives/MaldivesCards.css";
import { useNavigate } from "react-router-dom";

import cardImg1 from "../../../assets/maldives/card1.jpg";
import cardImg2 from "../../../assets/maldives/card2.jpg";
import cardImg3 from "../../../assets/maldives/card3.jpg";
import cardImg4 from "../../../assets/maldives/card4.jpg";
import cardImg5 from "../../../assets/maldives/card5.jpg";

const cardsData = [
  {
    img: cardImg1,
    title: "Escape to Paradise – Honeymoon Bliss",
    duration: "4 Days / 3 Nights",
    price: "₹69,999/- per person",
    discount: "15%",
    stars: "4 Star",
    cities: "Male (4D)",
    quote:
      "Pack your backpacks and get ready for a stupendous Maldives honeymoon package full of luxury and romance.",
    detailsRoute: "/quotations/maldives/card1",
  },
  {
    img: cardImg2,
    title: "Radisson Blu Maldives Water Villa",
    duration: "5 Days / 4 Nights",
    price: "₹108,400/- per person",
    discount: "10%",
    stars: "5 Star",
    cities: "Hulhumale (2D), Maafushi (3D)",
    quote:
      "Live in floating paradise with our premium water villa Maldives holiday designed for comfort and elegance.",
    detailsRoute: "/quotations/maldives/card2",
  },
  {
    img: cardImg3,
    title: "Budget Delight in Maldives",
    duration: "3 Days / 2 Nights",
    price: "₹48,500/- per person",
    discount: "20%",
    stars: "3 Star",
    cities: "Maafushi (3D)",
    quote:
      "The best tropical experience at a pocket-friendly price. Dive in and relax without hurting your wallet.",
    detailsRoute: "/quotations/maldives/card3",
  },
  {
    img: cardImg4,
    title: "Family Fun in Maldives",
    duration: "6 Days / 5 Nights",
    price: "₹124,000/- per person",
    discount: "12%",
    stars: "4 Star",
    cities: "Male (3D), Baros (2D)",
    quote:
      "Perfect mix of relaxation and adventure for families looking to unwind and bond in paradise.",
    detailsRoute: "/quotations/maldives/card4",
  },
  {
    img: cardImg5,
    title: "Maldives Adventure Explorer",
    duration: "4 Days / 3 Nights",
    price: "₹89,000/- per person",
    discount: "18%",
    stars: "4 Star",
    cities: "Vaadhoo (4D)",
    quote:
      "For the thrill-seekers and marine lovers, this one packs a punch with action and luxury combined.",
    detailsRoute: "/quotations/maldives/card5",
  },
];

const MaldivesCards = () => {
  const navigate = useNavigate();

  const handleViewDetails = (route) => {
    if (route) navigate(route);
  };

  const handleGetQuote = (title) => {
    alert(`Quote request for: ${title}`);
  };

  const handleAddToCompare = (title) => {
    alert(`Added to Compare: ${title}`);
  };

  return (
    <div className="cards-scroll-wrapper">
      {cardsData.map((card) => (
        <div key={card.title} className="card">
          <img src={card.img} alt={card.title} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-meta">
              <strong>Duration:</strong> {card.duration}
            </p>
            <p className="card-meta">
              <strong>Price:</strong> {card.price}
            </p>
            <p className="card-meta">
              <strong>Discount:</strong> {card.discount} off
            </p>
            <p className="card-meta">
              <strong>{card.stars}</strong>
            </p>
            <p className="card-meta">
              <strong>Cities:</strong> {card.cities}
            </p>
            <p className="card-description">{card.quote}</p>
            <div className="card-actions">
              <button
                className="btn btn-view"
                onClick={() => handleViewDetails(card.detailsRoute)}
              >
                View Details
              </button>
              <button
                className="btn btn-quote"
                onClick={() => handleGetQuote(card.title)}
              >
                Get Quote
              </button>
              <button
                className="btn btn-compare"
                onClick={() => handleAddToCompare(card.title)}
              >
                Add to Compare
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaldivesCards;
