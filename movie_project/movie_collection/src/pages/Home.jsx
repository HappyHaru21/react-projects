import MovieCard from "../components/movieCard";
import { useState , useEffect } from "react";
import "../css/Home.css";
import { searchMovie, getPopularMovies } from "../services/api";
import { use } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const loadPopularMovies = async () => {
        try{
            const data = await getPopularMovies();
            setMovies(data);
        }catch(error){
            setError("Failed to load");
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    loadPopularMovies();
  },[])

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return
    setLoading(true)
    try{
        const searchResults = await searchMovie(searchQuery);
        setMovies(searchResults);
        setError(null);
    }catch(err){
        setError("Failed to load");
        console.log(error);
    }finally{
        setLoading(false)
    }


  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

    {loading?(
        <div className="loading">Loading...</div>
    ):(<div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>)}

      
    </div>
  );
}

export default Home;