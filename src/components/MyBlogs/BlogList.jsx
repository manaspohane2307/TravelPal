import React from "react";
import BlogCard from "./BlogCard";

export default function BlogList({
  blogs,
  onEdit,
  onDelete,
  onLike,
  onBookmark,
}) {
  if (!blogs.length) {
    return <p className="no-blogs">You haven't posted any blogs yet.</p>;
  }

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          onEdit={onEdit}
          onDelete={onDelete}
          onLike={onLike}
          onBookmark={onBookmark}
        />
      ))}
    </div>
  );
}
