import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/blogs/MyBlogs.css";

const MyBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    author: "Manas",
    authorEmail: "manspohane@gmail.com",
  });
  const [image, setImage] = useState(null);
  const [myBlogs, setMyBlogs] = useState([]);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "title") {
      const generatedSlug = e.target.value.toLowerCase().replace(/\s+/g, "-");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setStatus({ message: "❌ Please upload an image.", type: "error" });
      return;
    }

    setLoading(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    data.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/blogs", data);
      setMyBlogs((prev) => [res.data, ...prev]);
      setStatus({ message: "✅ Blog uploaded successfully!", type: "success" });
      setFormData({
        title: "",
        slug: "",
        content: "",
        author: "Manas",
        authorEmail: "manspohane@gmail.com",
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      setStatus({ message: "❌ Failed to upload blog.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fetchMyBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      const userBlogs = res.data.filter(
        (blog) => blog.authorEmail === formData.authorEmail
      );
      setMyBlogs(userBlogs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  return (
    <div className="myblogs-container">
      <h1>My Blogs</h1>

      <form onSubmit={handleSubmit} className="blog-upload-form">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        {/* Custom styled file upload */}
        <label htmlFor="imageUpload" className="custom-file-upload">
          {image ? "✅ Image Selected" : "📁 Choose Image"}
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <textarea
          name="content"
          placeholder="Write your blog content..."
          value={formData.content}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Blog"}
        </button>

        {status.message && (
          <p className={`status-message ${status.type}`}>{status.message}</p>
        )}
      </form>

      <h2>Your Uploaded Blogs</h2>
      <div className="myblogs-list">
        {myBlogs.map((blog) => (
          <div key={blog._id} className="myblog-card">
            <img src={blog.imageUrl} alt={blog.title} />
            <div>
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 100)}...</p>
              <small>{new Date(blog.createdAt).toLocaleString()}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
