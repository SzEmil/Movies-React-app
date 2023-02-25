import { getMoviesCredits } from 'js/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const handleMoreInfoMovie = async () => {
      try {
        const movieDetail = await getMoviesCredits(movieId);
        setMovies(movieDetail);
      } catch (error) {
        setError(error);
      }
    };
    handleMoreInfoMovie();
  }, [movieId]);
  return (
    <>
      {error && <p>Oh, something went wrong :c error: {error.message}</p>}
      {movies.map(movie => (
        <li key={movie.id}>
          <p>{movie.name}</p>
          <p>{movie.character}</p>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
            alt="som pic"
          />
        </li>
      ))}
    </>
  );
};
