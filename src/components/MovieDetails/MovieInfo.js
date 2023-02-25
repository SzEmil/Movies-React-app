export const MovieInfo = ({ movie }) => {
  return (
    <>
      <div key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="som pic"
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
