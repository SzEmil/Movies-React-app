import { getMoviesById } from 'js/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleMoreInfoMovie = async () => {
      try {
        const movieDetail = await getMoviesById(movieId);
        console.log(movieDetail);
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
    </>
  );
};
