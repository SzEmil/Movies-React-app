import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import css from './MovieList.module.css';
import { useLocation } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={clsx(css.movieList)}>
        {movies.map(movie => (
          <li key={movie.id} className={clsx(css.movieItem)}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <div className={clsx(css.movieListCard)}>
                <div className={clsx(css.movieImgContainer)}>
                  {movie.poster_path === null ? (
                    <img
                      className={clsx(css.movieListNoImg)}
                      src="https://www.izba.lodz.pl/wp-content/themes/consultix/images/no-image-found-360x260.png"
                      alt="no pic found"
                    />
                  ) : (
                    <img
                      className={clsx(css.movieImg)}
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt="som pic"
                    />
                  )}
                  <div className={clsx(css.movieDesription)}>
                    <p>{movie.original_title}</p>
                    <p>{movie.release_date}</p>
                    <p className={clsx(css.movieVote)}>
                      <img
                        className={clsx(css.movieIcon)}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACp0lEQVRIS61VQUgUURh+/5td2cTdebMIIoJ6iYIuQtcK65AHM8xL0KEILehSK106BNap43YLUtNbdWlXyqKIDPEckRBEQRIUGbn7Zlw1Hef/ezOgTbuzu2+jd5g5zHvf93/v/75/gDWwVvPmaX97ctB+qHsMdDf6+5zn5kf/neqz9+qe0yYoPLIOGa04zzgD7wc/nB4qLuiQaBM4z8QcJanXB4U19klXhRZBcVZ08SR99qsPqkZG5hGb/zcF8omYAEHDYUCyIS/65al6JFoKnFdinZpoz19gmirqEjiPrVtk4bWoSknCpDghR2qpqEtgvzSLLMFEFAhswUbqmGyuSVCcEiJmUR8ZvAc57QeDdUGc2hmASTFK7Da2Ggqqlm8xBxA2CNgyIFtCog/g0rw54DwFezyd4QnKYicyZtRrmeZ3T1n5O18jB64HV7Q6LnpZE5/DDkWSIE2UKtt+AeNfuUMunEuNrOR3e1C6K3pYnM94HdjJmv+RZD0AXwQXz7ZclG+DUIbrCPrhQY7aqJesxkigCAxWYGGbaMA6L+UObqSLSpPprLfPyzRyV8YX4567iVfD4BUKdgCD0WDSUiME1QZgpIJa4apKarP7Zr99pvx7NEFocuqqgHV4nzouD+gRvBDfqFmFLbx8b/9UA1Q5mVrVI14GpQKnJmxFkiIV2PMm7ibYBy4phyxzGz12Awgk5zSGbdhd7jR0wbKO/nFQZJP9/y62sgdBfb6vlxX4Jky7Bo6GHeI7TU3YDLYrO++EswCj5kl5O6ytQoGcFTlooUH/OsCBRbaNl5MX5OuoXgTh5DyHFnVTm5rfEf+ICgJnRrxTl9CFW2wMYzhd7usoomCexViWmfgmOSQP1lRQmkhPuS7etC7JhnJQvCO64038SstwYTRM8BtUgh82sAYgSQAAAABJRU5ErkJggg=="
                        alt="star pic"
                      />
                      {movie.vote_average}
                    </p>
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
