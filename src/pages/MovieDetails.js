import { getMoviesById } from 'js/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleMoreInfoMovie = async () => {
      try {
        const movieDetail = await getMoviesById(movieId);
        setMovie(movieDetail);
      } catch (error) {
        setError(error);
      }
    };
    handleMoreInfoMovie();
  }, [movieId]);
  return (
    <>
      {error && <p>Oh, something went wrong :c error: {error.message}</p>}
      {movie !== undefined && <MovieInfo movie={movie} />}
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};
