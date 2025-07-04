import React from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function BlogCard({
  blog,
  onEdit,
  onDelete,
  onLike,
  onBookmark,
}) {
  const imagePath = blog.imageUrl
    ? `${API_URL}/uploads/${blog.imageUrl}`
    : null;

  return (
    <div className="uploaded-blog-card">
      {imagePath && (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/images/${
            blog.imageUrl
          }`}
          alt="Blog Cover"
          className="uploaded-blog-image"
        />
      )}

      <div className="uploaded-blog-content">
        <h3 className="uploaded-blog-title">{blog.title}</h3>
        <p className="uploaded-blog-text">
          {blog.content.length > 200
            ? blog.content.slice(0, 200) + "..."
            : blog.content}
        </p>

        <div className="blog-reactions">
          <button onClick={() => onLike(blog._id)}>❤️ {blog.likes || 0}</button>
          <button onClick={() => onBookmark(blog._id)}>
            {blog.bookmarked ? "🔖 Bookmarked" : "🔖 Bookmark"}
          </button>
        </div>

        <div className="blog-actions">
          <button onClick={() => onEdit(blog)}>✏️ Edit</button>
          <button onClick={() => onDelete(blog._id)}>🗑️ Delete</button>
        </div>
      </div>
    </div>
  );
}
