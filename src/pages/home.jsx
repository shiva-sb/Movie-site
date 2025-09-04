import '../css/Home.css'
import { Moviecard } from "../component/moviecard"
import { useState, useEffect } from "react"
import { searchMovies } from '../service/api';

export function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load some default movies when page loads
        const loadDefaultMovies = async () => {
            try {
                const popularMovies = await searchMovies("batman"); // default query
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Unable to load...");
            } finally {
                setLoading(false);
            }
        };
        loadDefaultMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return; // prevent empty search

        setLoading(true);
        try {
            const results = await searchMovies(searchQuery);
            setMovies(results || []);
        } catch (err) {
            console.log(err);
            setError("Unable to search...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="movies-grid">
                {movies.map(movie => (
                    <Moviecard movie={movie} key={movie.imdbID} />
                ))}
            </div>
        </div>
    );
}
