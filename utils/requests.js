const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    // Handle API request errors here
    console.error('Error fetching trending movies:', error.message);
    // You can choose to re-throw the error or return a default value
    // throw error;
    return []; // Return an empty array or another default value
  }
};

export const getMovies = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    // Handle API request errors here
    console.error('Error searching for movies:', error.message);
    // You can choose to re-throw the error or return a default value
    // throw error;
    return []; // Return an empty array or another default value
  }
};

export const getMovieDetails = async (movie_id) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    // Handle API request errors here
    console.error('Error fetching movie details:', error.message);
    // You can choose to re-throw the error or return a default value
    // throw error;
    return {}; // Return an empty object or another default value
  }
};



