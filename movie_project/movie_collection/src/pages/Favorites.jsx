import "../css/Favorites.css";
import { useMovieContext } from "../context/movieContext";
import MovieCard from "../components/movieCard";

function Favorites() {
    const {favorites} = useMovieContext();
    if(favorites){
        return <div>
        <h2 className="favorites-heading">Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Start adding movies to your favorite list!</p>
        </div>
    );
}

export default Favorites;