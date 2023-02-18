import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movie = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Cast = lazy(() => import('components/MovieCast/MovieCast'));
const Reviews = lazy(() => import('components/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
