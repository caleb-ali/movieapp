const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export const getTrendingMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    const first10Movies = data.results.slice(0, 10);

    return first10Movies;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return []; 
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
    console.error('Error searching for movies:', error.message);
    return []; 
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
    console.error('Error fetching movie details:', error.message);
    return {}; 
  }
};



