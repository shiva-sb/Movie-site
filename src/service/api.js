const API_KEY = "4dcb72a1";
const BASE_URL = "http://www.omdbapi.com/";

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
