import '../css/Favorite.css'
import { useMovieContext } from '../contexts/movieContext'
import { Moviecard } from '../component/moviecard'
export function Favorite() {

    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className='favorites'>
                <h1>Your Favorites..</h1>
                <div className="movies-grid">
                    {favorites.map(movie => (
                        <Moviecard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            </div>
        )
    }
    return (<div className="favorites-empty">
        <h1>Your favorites list is empty</h1>
        <p>Add a movie to see it here 🎬</p>

    </div>)
}