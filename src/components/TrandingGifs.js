import React, { useState, useEffect } from "react";
import { fetchTrendingGifs } from "../api/gifApi";
import GifCard from "./GifCard";

const TrendingGifs = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTrendingGifs();
  }, []);

  const loadTrendingGifs = async () => {
    try {
      setLoading(true);
      setError(null);
      const trendingGifs = await fetchTrendingGifs();
      setGifs(trendingGifs);
    } catch (err) {
      setError("Failed to load trending GIFs. Please try again later.");
      console.error("Error fetching trending GIFs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadTrendingGifs();
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>Loading trending GIFs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p style={{ color: "red" }}>{error}</p>
        <button
          onClick={handleRefresh}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Trending GIFs</h2>
        <button
          onClick={handleRefresh}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Refresh
        </button>
      </div>

      {gifs.length === 0 ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>No trending GIFs found.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingGifs;
