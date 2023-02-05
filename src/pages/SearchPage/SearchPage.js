import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../utils/api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { Loader } from '../../components/Loader/Loader';
import { MovieList } from '../../components/MovieList/MovieList';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!query) return;

    const findMovies = async () => {
      setLoading(true);

      try {
        const films = await getSearchMovies(query);

        if (!films.length) {
          return toast.error('Oooppss! Movies not found...', { icon: '❌' });
        }
        setMovies(films);
      } catch (error) {
        return toast.error('Something wrong! Please reload the page!');
      } finally {
        setLoading(false);
      }
    };

    findMovies();
  }, [query, searchQuery]);

  const searchQueryFormSubmit = searchQuery => {
    setSearchParams({ searchQuery });
    setSearchQuery(searchQuery);
    setMovies([]);
  };

  return (
    <>
      <div>
        <Toaster />
        <Searchbar onSubmit={searchQueryFormSubmit}></Searchbar>
        {loading && <Loader />}
        {movies && <MovieList movies={movies} />}
      </div>
    </>
  );
}
