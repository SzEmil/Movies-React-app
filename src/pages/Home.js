import React from 'react';
import { getTrending } from 'js/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useMovieContext } from 'components/MovieContext/MovieContext';
import css from '../components/MoviesList/MovieList.module.css';
import clsx from 'clsx';

const Home = () => {
  const { movies, setMovies } = useMovieContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, [setMovies]);

  return (
    <div className={clsx(css.movieListContainer)}>
      <h2 className={clsx(css.title)}>Trending today</h2>
      {error && <p>Oh, something went wrong :c error: {error.message}</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Home;
