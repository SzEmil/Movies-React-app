import { getMoviesCredits } from 'js/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './Cast.module.css';

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
      <ul className={clsx(css.castList)}>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.profile_path === null ? (
              <img
                className={clsx(css.castNoImg)}
                src="https://www.izba.lodz.pl/wp-content/themes/consultix/images/no-image-found-360x260.png"
                alt="no pic found"
              />
            ) : (
              <img
                className={clsx(css.castImg)}
                src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
                alt="som pic"
              />
            )}
            <div className={clsx(css.castDescriptionBox)}>
              <p className={clsx(css.castName)}>{movie.name}</p>
              <p className={clsx(css.castCharacter)}>{movie.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
