export const MovieInfo = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt="som pic"
      />
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
    </>
  );
};
