import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../utils/api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Tittle } from './Home.styled';

import { Loader } from '../../components/Loader/Loader';
import toast from 'react-hot-toast';

export default function TrendMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieList = async () => {
      setLoading(true);
      try {
        const response = await getTrendingMovies();
        setMovies(response);
      } catch (error) {
        return toast.error('Something wrong! Please reload the page!');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieList();
  }, []);

  return (
    <div>
      <Tittle>Today Trending Movies </Tittle>
      {loading && <Loader />}
      {movies.length && <MovieList movies={movies} />}
    </div>
  );
}
