import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../utils/api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Tittle } from './Home.styled';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import noMovie from '../../images/noMovie.jpg';
import { Poster } from '../../components/MovieList/MovieList.styled';

export default function TrendMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(19);

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

  // const indexOfLastPost = currentPage * moviesPerPage;
  // const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  // const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Tittle>Today Trending Movies </Tittle>
      {loading && <Loader />}
      <Toaster />
      {!movies.length && <Poster src={noMovie} alt="" />}
      {movies.length && <MovieList movies={movies}></MovieList>}
      <Pagination
        paginate={paginate}
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
      ></Pagination>
    </div>
  );
}
