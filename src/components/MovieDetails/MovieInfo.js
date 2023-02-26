import clsx from 'clsx';
import css from './MovieInfo.module.css';
export const MovieInfo = ({ movie }) => {
  return (
    <>
      <div key={movie.id} className={clsx(css.movieInfoContainer)}>
        <div>
          <h2 className={clsx(css.movieInfoTitles)}>{movie.title}</h2>
          <p>
            Release date:{' '}
            <span style={{ color: 'red' }}>{movie.release_date}</span>
          </p>
          <p>
            User Score:{' '}
            <span style={{ color: 'red' }}>{movie.vote_average}</span>
          </p>
          <h2 className={clsx(css.movieInfoDescriptionHeader)}>Overview</h2>
          <p className={clsx(css.movieInfoOverview)}>{movie.overview}</p>
          <h2 className={clsx(css.movieInfoDescriptionHeader)}>Genres</h2>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <a
            className={clsx(css.movieInfoHomepageLink)}
            href={`${movie.homepage}`}
          >
            More Details
          </a>
        </div>

        <div
          className={clsx(css.movieInfoBaner)}
          style={{
            background: `linear-gradient(68deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.18109250536151966) 80%), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </>
  );
};
