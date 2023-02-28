import axios from 'axios';

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=5349b69c770fce41df09c49c43dbcd6b`
  );
  // console.log(response.data.results);
  return response.data.results;
};

export const getMoviesByQuery = async (query, pageNum) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US&query=${query}&page=${pageNum}&include_adult=false`
  );
  // console.log(response.data.results);
  return response.data.results;
};

export const getMoviesById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US`
  );
   console.log(response.data);
  return response.data;
};

export const getMoviesCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US`
  );
  // console.log(response.data.cast);
  return response.data.cast;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US&page=1`
  );

  return response.data.results;
};

// `https://api.themoviedb.org/3/trending/movie/week?api_key=5349b69c770fce41df09c49c43dbcd6b` -- trendujące filmy

// `https://api.themoviedb.org/3/search/movie?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US&query=batman&page=1&include_adult=false` -- wyszukiwanie po nazwie filmow

// `https://api.themoviedb.org/3/movie/MOVIEID?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US` -- detale filmu

// `https://api.themoviedb.org/3/movie/MOVIEID/credits?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US` -- zespol aktorski filmu

// `https://api.themoviedb.org/3/movie/MOVIEID/reviews?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US&page=1` -- recenzje filmu strona 1
