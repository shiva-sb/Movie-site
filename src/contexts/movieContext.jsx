import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorite] = useState([]);
    useEffect(() => {
        const storeFavs = localStorage.getItem("favorites")
        if (storeFavs) setFavorite(JSON.parse(storeFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFav = (Movie) => {
        setFavorite(prev => [...prev, Movie]);
    }
    const removeFromFav = (MovieID) => {
        setFavorite(prev => prev.filter(movie => movie.imdbID !== MovieID))
    }
    const isFav = (MovieID) => {
        return favorites.some(movie => movie.imdbID == MovieID)
    }
    const value = {
        favorites,
        addToFav,
        removeFromFav,
        isFav
    }
    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}