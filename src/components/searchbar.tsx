import React, { useState } from "react";

export interface Song {
  name: string;
  artist: string;
}

interface SearchBarProps {
  onResults: (results: Song[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onResults }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await fetch(`http://localhost:5000/spotify/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data: Song[] = await res.json();
      onResults(data);
    } catch (error) {
      console.error("Search error:", error);
      onResults([]);
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={query}
        placeholder="Search for songs..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
