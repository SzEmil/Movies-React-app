import { getMoviesById } from 'js/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BtnGoBack } from 'components/BtnGoBack/BtnGoBack';
import styled from 'styled-components';
import clsx from 'clsx';
import css from './MovieDetails.module.css';
import { useLocation } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: red;
  }
`;

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
      <div style={{ margin: '0 100px 0 100px' }}>
        <NavLink to={backLinkHref}>
          <BtnGoBack />
        </NavLink>
        {movie !== undefined && <MovieInfo movie={movie} />}
        <div style={{ marginTop: '20px' }}>
          <StyledLink className={clsx(css.movieDetailsLink)} to="cast">
            Cast
          </StyledLink>
          <span className={clsx(css.movieDetailsSpan)}>|</span>
          <StyledLink className={clsx(css.movieDetailsLink)} to="reviews">
            Reviews
          </StyledLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};
