import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function BlogForm({ setBlogs, blogs, editBlog, setEditBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [musicFile, setMusicFile] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title);
      setContent(editBlog.content);
    } else {
      setTitle("");
      setContent("");
      setImageFile(null);
      setMusicFile(null);
    }
  }, [editBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (imageFile) formData.append("image", imageFile);
    if (musicFile) formData.append("music", musicFile);

    try {
      let res, blog;
      const endpoint = editBlog
        ? `${API_URL}/api/blogs/${editBlog._id}`
        : `${API_URL}/api/blogs`;

      res = await fetch(endpoint, {
        method: editBlog ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server error:", errorText);
        toast.error("Blog submission failed.");
        return;
      }

      blog = await res.json();

      if (editBlog) {
        setBlogs(blogs.map((b) => (b._id === blog._id ? blog : b)));
        toast.success("Blog updated successfully!");
      } else {
        setBlogs([blog, ...blogs]);
        toast.success("Blog published successfully!");
      }

      // Clear form
      setTitle("");
      setContent("");
      setImageFile(null);
      setMusicFile(null);
      setEditBlog(null);
    } catch (error) {
      console.error("Error submitting blog:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <form
      className="blog-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <h3>{editBlog ? "Edit Blog" : "Write a New Blog"}</h3>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Write your travel story here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      {/* Image upload */}
      <div className="file-upload-group">
        <label htmlFor="image-upload" className="upload-label">
          📸 Upload Image
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="hidden-upload"
        />
        {imageFile && <p className="file-name">{imageFile.name}</p>}
        {editBlog?.imageUrl && !imageFile && (
          <p className="existing-file">📎 Existing: {editBlog.imageUrl}</p>
        )}
      </div>

      {/* Music upload */}
      <div className="file-upload-group">
        <label htmlFor="music-upload" className="upload-label">
          🎵 Upload Music
        </label>
        <input
          type="file"
          id="music-upload"
          accept="audio/*"
          onChange={(e) => setMusicFile(e.target.files[0])}
          className="hidden-upload"
        />
        {musicFile && <p className="file-name">{musicFile.name}</p>}
        {editBlog?.musicUrl && !musicFile && (
          <p className="existing-file">📎 Existing: {editBlog.musicUrl}</p>
        )}
      </div>

      <button type="submit">{editBlog ? "Update" : "Publish"}</button>
    </form>
  );
}
