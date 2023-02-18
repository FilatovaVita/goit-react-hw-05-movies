import axios from 'axios';

const KEY = 'c38fbf9ef4d95318ebd4d81243883dff';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
     query
    },
  });

  return data.results;
};
export const getMovieDetails = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getMovieTrailer = async movieId => {
  const { data } = await axios(`/movie/${movieId}/videos`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

