import React from 'react';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { useMovieContext } from 'components/MovieContext/MovieContext';
import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'js/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { BtnNextPage } from 'components/BtnNextPage/BtnNextPage';
import { useSearchParams } from 'react-router-dom';
import { BtnPreviousPage } from 'components/BtnPreviusPage/BtnPreviousPage';
import css from './Movies.module.css';
import clsx from 'clsx';

const Movies = () => {
  const { movies, setMovies } = useMovieContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  const handleOnSubmit = async query => {
    setIsLoading(true);
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const queryUrl = searchParams.get('query');
  useEffect(() => {
    if (queryUrl === null) return;
    const findMovies = async () => {
      setPageNumber(1);
      try {
        const queryMovies = await getMoviesByQuery(queryUrl, 1);
        setMovies(queryMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    findMovies();
  }, [setMovies, queryUrl]);

  useEffect(() => {
    setMovies([]);
  }, [setMovies]);

  const handleOnClickNext = async () => {
    setIsLoading(true);
    try {
      const allMovies = await getMoviesByQuery(queryUrl, pageNumber + 1);
      console.log('dostarczam nowe moviesy na stronie', pageNumber);
      setPageNumber(pageNumber + 1);
      setMovies(allMovies);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnClickBack = async () => {
    setIsLoading(true);
    try {
      const allMovies = await getMoviesByQuery(queryUrl, pageNumber - 1);
      setPageNumber(pageNumber - 1);
      setMovies(allMovies);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className={clsx(css.movieListContainer)}>
        <SearchMovieForm onSubmit={handleOnSubmit} />
        {error && <p>Oh, something went wrong :c error: {error.message}</p>}
        {movies.length === 0 ? (
          <p className={clsx(css.movieListNoMovies)}>
            sorry, video you looking for doesn't exist
          </p>
        ) : (
          <MoviesList movies={movies} />
        )}
        <Loader isLoading={isLoading} />
        {pageNumber === 0 || movies.length === 0 ? null : (
          <div className={clsx(css.movieListBtnWrapper)}>
            {pageNumber === 1 ? (
              <></>
            ) : (
              <BtnPreviousPage handleOnClick={handleOnClickBack} />
            )}
            <p className={clsx(css.movieListPage)}>{pageNumber}</p>
            <BtnNextPage handleOnClick={handleOnClickNext} />
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
