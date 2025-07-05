import React, { useState } from "react";
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
    author: "Emily Carter",
    date: "July 3, 2025",
    image: blog1Img,
    tags: ["Europe", "Offbeat", "Travel Tips"],
    content:
      "Europe is full of hidden gems that often get overlooked. From the fairy-tale town of Hallstatt in Austria to the rugged coastlines of Portugal’s Algarve...",
  },
  {
    id: 2,
    title: "Solo Travel Tips",
    slug: "solo-travel-tips",
    author: "Emily Carter",
    date: "July 3, 2025",
    image: blog2Img,
    tags: ["Solo Travel", "Confidence", "Safety"],
    content:
      "Traveling alone can be one of the most enriching experiences of your life. It offers freedom, confidence, and self-discovery...",
  },
  {
    id: 3,
    title: "Budget Travel Hacks",
    slug: "budget-travel-hacks",
    author: "Emily Carter",
    date: "July 3, 2025",
    image: blog3Img,
    tags: ["Budget", "Savings", "Backpacking"],
    content:
      "Travel doesn’t have to be expensive. With smart planning and a few tricks, you can explore the world on a budget...",
  },
  {
    id: 4,
    title: "Top Food Destinations",
    slug: "top-food-destinations",
    author: "Emily Carter",
    date: "July 3, 2025",
    image: blog4Img,
    tags: ["Food", "Culture", "Culinary"],
    content:
      "Explore the top food destinations around the world. From sushi in Tokyo to pasta in Rome and street food in Bangkok...",
  },
  {
    id: 5,
    title: "Packing Tips for Travelers",
    slug: "packing-tips",
    author: "Emily Carter",
    date: "July 3, 2025",
    image: blog5Img,
    tags: ["Packing", "Checklist", "Minimalism"],
    content:
      "Never overpack again. Learn the secrets of minimalist travel packing and must-have items...",
  },
  {
    id: 6,
    title: "Best Beach Escapes",
    slug: "beach-escapes",
    author: "Emily Carter",
    date: "July 3, 2025",
    image: blog6Img,
    tags: ["Beach", "Relaxation", "Island"],
    content:
      "Dreaming of turquoise waters and white sands? Discover the best beach destinations to relax and recharge...",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Travel Blog</h1>
      <p className="blogs-subtitle">
        Discover tips, guides, and inspiration for your next adventure.
      </p>
      <p className="blogs-tagline">
        ✈️ Craft your memories, explore with purpose, and let every journey tell
        your story.
      </p>

      <input
        type="text"
        placeholder="Search articles by title, content or tag..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="blogs-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              className="blog-card"
              key={post.id}
              onClick={() => handleClick(post.slug)}
            >
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-card-content">
                <h3 className="blog-heading">{post.title}</h3>
                <p className="blog-meta">
                  By <span className="author">{post.author}</span> • {post.date}
                </p>
                <div className="blog-tags">
                  {post.tags.map((tag, idx) => (
                    <span className="blog-tag" key={idx}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="blog-preview">
                  {post.content.split(" ").slice(0, 30).join(" ")}...
                </p>
                <div className="blog-card-footer">
                  <div className="blog-actions">
                    <button className="blog-action-btn" title="Like">
                      ❤️
                    </button>
                    <button className="blog-action-btn" title="Bookmark">
                      🔖
                    </button>
                    <button className="blog-action-btn" title="Share">
                      🔗
                    </button>
                  </div>
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
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching articles found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
