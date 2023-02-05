import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../../pages/MoviePage/MoviePage'));
const Search = lazy(() => import('../../pages/SearchPage/SearchPage'));
const Cast = lazy(() => import('components/MovieCast/MovieCast'));
const Reviews = lazy(() => import('components/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="movies/:movieId" element={<Movies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
