const API_KEY = "GIVGYHkr3WSBn55srscGQn55uUv31oWo";
const BASE_URL = "https://api.giphy.com/v1/gifs";

export const fetchTrendingGifs = async (limit = 25) => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending?api_key=${API_KEY}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching trending GIFs:", error);
    throw new Error("Failed to fetch trending GIFs");
  }
};

export const fetchRandomGif = async () => {
  try {
    const response = await fetch(`${BASE_URL}/random?api_key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || {};
  } catch (error) {
    console.error("Error fetching random GIF:", error);
    throw new Error("Failed to fetch random GIF");
  }
};

export const searchGifs = async (query, limit = 24) => {
  if (!query) {
    throw new Error("Search query is required");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search?api_key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error(`Error searching GIFs for "${query}":`, error);
    throw new Error("Failed to search GIFs");
  }
};

export default {
  fetchTrendingGifs,
  fetchRandomGif,
  searchGifs,
};
