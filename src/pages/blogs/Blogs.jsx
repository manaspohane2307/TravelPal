import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/blogs/Blogs.css";
import blog1Img from "../../assets/blogs/blog1.jpg";
import blog2Img from "../../assets/blogs/blog2.jpg";
import blog3Img from "../../assets/blogs/blog3.jpg";
import blog4Img from "../../assets/blogs/blog4.jpg";
import blog5Img from "../../assets/blogs/blog5.jpg";
import blog6Img from "../../assets/blogs/blog6.jpg";
import Footer from "../../components/Footer";


const blogPosts = [
  {
    id: 1,
    title: "Hidden Gems in Europe",
    slug: "hidden-gems-europe",
    image: blog1Img,
    content:
      "Europe is full of hidden gems that often get overlooked. From the fairy-tale town of Hallstatt in Austria to the rugged coastlines of Portugal’s Algarve, there’s so much to explore beyond the typical tourist destinations. Discover peaceful villages, quiet beaches, and charming streets.",
  },
  {
    id: 2,
    title: "Solo Travel Tips",
    slug: "solo-travel-tips",
    image: blog2Img,
    content:
      "Traveling alone can be one of the most enriching experiences of your life. It offers freedom, confidence, and self-discovery. Learn how to plan your journey, stay safe, and connect with locals and other travelers along the way for an unforgettable adventure.",
  },
  {
    id: 3,
    title: "Budget Travel Hacks",
    slug: "budget-travel-hacks",
    image: blog3Img,
    content:
      "Travel doesn’t have to be expensive. With smart planning and a few tricks, you can explore the world on a budget. Learn how to find cheap flights, save on accommodations, and enjoy authentic experiences without breaking the bank.",
  },
  {
    id: 4,
    title: "Top Food Destinations",
    slug: "top-food-destinations",
    image: blog4Img,
    content:
      "Explore the top food destinations around the world. From sushi in Tokyo to pasta in Rome and street food in Bangkok, this guide will take you through the best places to satisfy your culinary cravings.",
  },
  {
    id: 5,
    title: "Packing Tips for Travelers",
    slug: "packing-tips",
    image: blog5Img,
    content:
      "Never overpack again. Learn the secrets of minimalist travel packing, must-have items, and how to fit everything you need in a carry-on without stress.",
  },
  {
    id: 6,
    title: "Best Beach Escapes",
    slug: "beach-escapes",
    image: blog6Img,
    content:
      "Dreaming of turquoise waters and white sands? Discover the best beach destinations to relax, recharge, and soak up the sun around the world.",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Travel Blog</h1>
      <p className="blogs-subtitle">
        Discover tips, guides, and inspiration for your next adventure.
      </p>

      <input type="text" placeholder="Search articles" className="search-bar" />

      <div className="blogs-grid">
        {blogPosts.map((post) => (
          <div
            className="blog-card"
            key={post.id}
            onClick={() => handleClick(post.slug)}
          >
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-heading">{post.title}</h3>
            <p className="blog-preview">
              {post.content.split(" ").slice(0, 30).join(" ")}...
            </p>
            <button
              className="read-more-btn"
              onClick={(e) => {
                e.stopPropagation(); // prevent card click propagation
                handleClick(post.slug);
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default Blogs;
