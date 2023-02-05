import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../utils/api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Tittle } from './HomePage.styled';
import toast from 'react-hot-toast';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      const response = await getTrendingMovies();
      setMovies(response);
    };
    fetchMovieList();
  }, []);

  return (
    <div>
      <Tittle>Today Trending Movies </Tittle>
      {movies.length ? (
        <MovieList movies={movies} />
      ) : (
        toast.error('Something went wrong..reload the page!')
      )}
    </div>
  );
}
