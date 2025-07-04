import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import BlogForm from "../../components/MyBlogs/BlogForm";
import BlogList from "../../components/MyBlogs/BlogList";
import "../../styles/BlogStyles.css";

export default function MyBlogsPage() {
  const { token } = useAuth(); // ✅ Get token from context
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [query, setQuery] = useState("");
  const [bookmarksOnly, setBookmarksOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("❌ Failed to fetch blogs:", err.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [token, navigate]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBlogs((prev) => prev.filter((b) => b._id !== id));
  };

  const handleEdit = (blog) => setEditBlog(blog);

  const handleLike = async (id) => {
    const res = await fetch(`http://localhost:5000/api/blogs/like/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const updated = await res.json();
    setBlogs((prev) => prev.map((b) => (b._id === id ? updated : b)));
  };

  const handleBookmark = async (id) => {
    const res = await fetch(`http://localhost:5000/api/blogs/bookmark/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const updated = await res.json();
    setBlogs((prev) => prev.map((b) => (b._id === id ? updated : b)));
  };

  const filteredBlogs = blogs.filter((b) => {
    const match =
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.content.toLowerCase().includes(query.toLowerCase());
    const bookmarked = !bookmarksOnly || b.bookmarkedBy?.length > 0;
    return match && bookmarked;
  });

  if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>;

  if (!token) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>You must be logged in to view your blogs.</p>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="myblogs-container">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search your blogs..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="bookmark-toggle">
          <input
            type="checkbox"
            checked={bookmarksOnly}
            onChange={() => setBookmarksOnly((prev) => !prev)}
          />
          See Bookmarks
        </label>
      </div>

      <BlogForm
        setBlogs={setBlogs}
        blogs={blogs}
        editBlog={editBlog}
        setEditBlog={setEditBlog}
      />

      <h3 className="blog-subheading">My Uploaded Blogs</h3>

      <BlogList
        blogs={filteredBlogs}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onLike={handleLike}
        onBookmark={handleBookmark}
      />
    </div>
  );
}
