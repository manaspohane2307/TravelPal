import React from "react";

export default function FilterBar({
  query,
  setQuery,
  bookmarksOnly,
  setBookmarksOnly,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={bookmarksOnly}
          onChange={() => setBookmarksOnly((prev) => !prev)}
        />
        Show Bookmarks Only
      </label>
    </div>
  );
}
