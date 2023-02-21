import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../utils/api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { Loader } from '../../components/Loader/Loader';
import { MovieList } from '../../components/MovieList/MovieList';
import { Pagination } from '../../components/Pagination/Pagination';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(19);
  const query = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!query) return;
    const findMovies = async () => {
      setLoading(true);
      try {
        const films = await getSearchMovies(query);
        if (!films.length) {
          toast.error('Oooppss! Movies not found...', { icon: '❌' });
        }
        setMovies(films);
        setMoviesPerPage(films.length);
      } catch (error) {
        toast.error('Something wrong! Please reload the page!');
      } finally {
        setLoading(false);
      }
    };
    findMovies();
  }, [query]);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const searchQueryFormSubmit = searchQuery => {
    setSearchParams({ searchQuery });
    setMovies([]);
  };

  return (
    <>
      <div>
        <Toaster />
        <Searchbar onSubmit={searchQueryFormSubmit}></Searchbar>
        {loading && <Loader />}
        {movies && <MovieList movies={movies} />}
        <Pagination
          paginate={paginate}
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
        />
      </div>
    </>
  );
}
