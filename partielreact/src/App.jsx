import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// Simulation d'un fetch d'API
		setMovies([
			{ id: 1, title: "Inception", image: "./img/thumbnail.png" },
			{ id: 2, title: "Interstellar", image: "./img/thumbnail.png" },
			{ id: 3, title: "Dune", image: "./img/thumbnail.png" }
		]);
	}, []);

	return (
		<div>
			{/* Barre de navigation */}
			<nav className="desktop-nav">
				<a href="index.html"><i className="fas fa-film"></i></a>
				<ul>
					<li><a href="#">Films</a></li>
					<li><a href="#">Séries</a></li>
					<li><a href="#">Populaires</a></li>
				</ul>
			</nav>

			{/* Contenu principal */}
			<main>
				<h1>Bienvenue sur le projet Film</h1>
				<div className="movies-list">
					{movies.map((movie) => (
						<div key={movie.id} className="movie-item">
							<img src={movie.image} alt={movie.title} />
							<h2>{movie.title}</h2>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}


export default App
