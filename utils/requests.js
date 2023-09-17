const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export const getTrendingMovies = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
  console.log(res);
  const data = await res.json();
  return data.results

}

export const getMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
}

export const getMovieDetails = async (movie_id) => {
  const res = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
}


