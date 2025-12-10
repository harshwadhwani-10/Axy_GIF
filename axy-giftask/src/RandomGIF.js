import React, { useState } from "react";
import { fetchRandomGif } from "./gifApi";

const RandomGif = ({ isAuthenticated, onAuthRequired }) => {
  const [gif, setGif] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateRandomGif = async () => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const randomGif = await fetchRandomGif();
      setGif(randomGif);
    } catch (err) {
      setError("Failed to generate random GIF. Please try again.");
      console.error("Error fetching random GIF:", err);
    }
  };

  const handleGenerateClick = () => {
    generateRandomGif();
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>You need to be logged in to generate random GIFs.</p>
          <button
            onClick={onAuthRequired}
          
          >
            Login to Generate
          </button>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={handleGenerateClick}
              disabled={loading}
    
            >
              {loading
                ? "Generating..."
                : gif
                ? "Generate Another"
                : "Generate Random GIF"}
            </button>
          </div>

          {loading && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <p>Generating random GIF...</p>
            </div>
          )}

          {error && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}

          {gif && !loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <GifCard gif={gif} showTitle={true} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RandomGif;
