import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import css from './MovieList.module.css';
export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '20px',
          paddingLeft: '0',
          margin: '0',
          justifyContent: 'center',
        }}
      >
        {movies.map(movie => (
          <li key={movie.id} className={clsx(css.movieItem)}>
            <Link to={`/movies/${movie.id}`}>
              <div
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                }}
              >
                <div className={clsx(css.movieImgContainer)}>
                  <img
                    className={clsx(css.movieImg)}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt="som pic"
                  />

                  <div className={clsx(css.movieDesription)}>
                    <p>{movie.original_title}</p>
                    <p>{movie.release_date}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
