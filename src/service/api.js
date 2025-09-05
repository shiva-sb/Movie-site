const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.Search; // OMDb returns results in "Search" array
};

export const getMovieById = async (id) => {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${id}`
    );
    const data = await response.json();
    return data; // returns single movie object
};
