import '../css/moviecard.css'
import { useMovieContext } from '../contexts/movieContext'
export function Moviecard({ movie }) {
    const { isFav, addToFav, removeFromFav } = useMovieContext();
    const favorite = isFav(movie.imdbID)

    function onfavclick(e) {
        e.preventDefault();
        if(favorite) removeFromFav(movie.imdbID)
        else addToFav(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onfavclick}>♡</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    </div>
}


//export default Moviecard