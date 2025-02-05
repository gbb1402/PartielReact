import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./css/style.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=7c51ce5f51b2a0e2bb3bf45b2afaa9ae`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Erreur lors du chargement des détails du film", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Chargement...</p>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p><strong>Note :</strong> {movie.vote_average} / 10</p>
      <Link to="/" className="back-button">← Retour à la liste des films</Link>
    </div>
  );
}

export default MovieDetail;
