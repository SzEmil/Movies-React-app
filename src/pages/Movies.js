import React from 'react';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { useMovieContext } from 'components/MovieContext/MovieContext';
import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'js/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const { movies, setMovies } = useMovieContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOnSubmit = async query => {
    setIsLoading(true);
    console.log(searchParams);
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);

    try {
      const queryMovies = await getMoviesByQuery(query);
      setMovies(queryMovies);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
  }, [setMovies]);
  return (
    <>
      <SearchMovieForm onSubmit={handleOnSubmit} />
      {error && <p>Oh, something went wrong :c error: {error.message}</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
      <Loader isLoading={isLoading} />
    </>
  );
};
