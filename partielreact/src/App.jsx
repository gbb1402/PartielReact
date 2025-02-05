import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/style.css";
import MovieDetail from "./MovieDetail";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=7c51ce5f51b2a0e2bb3bf45b2afaa9ae"
        );
        const data = await response.json();
        setMovies(data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        })));
      } catch (error) {
        console.error("Erreur lors du chargement des films", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <nav className="desktop-nav">
            <a href="/"><i className="fas fa-film"></i></a>
            <ul>
              <li><Link to="/">Films</Link></li>
              <li><a href="#">Séries</a></li>
              <li><a href="#">Populaires</a></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={
              <main>
                <h1>Bienvenue sur le projet Film</h1>
                <div className="movies-list">
                  {movies.map((movie) => (
                    <div key={movie.id} className="movie-item">
                      <Link to={`/movie/${movie.id}`}>
                        <img src={movie.image} alt={movie.title} />
                        <h2>{movie.title}</h2>
                      </Link>
                    </div>
                  ))}
                </div>
              </main>
            } />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
