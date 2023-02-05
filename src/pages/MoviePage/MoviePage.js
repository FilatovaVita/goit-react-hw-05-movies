import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';
import noPoster from '../../images/noPoster.jpg';
import noMovie from '../../images/noMovie.jpg';
import {
  LinkReturn,
  Paragraph,
  LinkCast,
  LinkRewiews,
  FilmInfoContainer,
  Section,
  GenresItem,
  GenresList,
  FilmMore,
  MainTittle,
  DetailsTittles,
  MoviePoster,
} from './MoviePage.styled';
import { Loader } from '../../components/Loader/Loader';
import toast from 'react-hot-toast';

export default function MovieDetailsPage() {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { movieId } = useParams();

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const oneMovie = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovies(data);
      } catch (error) {
        setError(error);
        return toast.error('Something went wrong..reload the page!');
      } finally {
        setLoading(false);
      }
    };
    oneMovie();
  }, [movieId]);

  const releaseData = new Date(movies.release_date);
  const { release_date, title, vote_average, overview, genres, poster_path } =
    movies;

  return (
    <>
      <LinkReturn to={locationFrom}> ◀ BACK </LinkReturn>
      {loading && <Loader />}
      {error && <img src={noMovie} alt="" />}
      {!error && (
        <Section>
          {poster_path ? (
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          ) : (
            <MoviePoster src={noPoster} alt={title} />
          )}
          <FilmInfoContainer>
            <MainTittle>
              {title} ({releaseData.getFullYear(release_date)})
            </MainTittle>
            <DetailsTittles>User score: {vote_average * 10}%</DetailsTittles>
            <DetailsTittles>Genres:</DetailsTittles>
            <GenresList>
              {genres &&
                genres.map(({ name }) => (
                  <GenresItem key={name}>🎥 {name} |</GenresItem>
                ))}
            </GenresList>
            <DetailsTittles>Overview </DetailsTittles>
            {overview ? (
              <Paragraph>{overview}</Paragraph>
            ) : (
              <Paragraph>No overview</Paragraph>
            )}
          </FilmInfoContainer>
        </Section>
      )}
      {!error && (
        <Section>
          <LinkCast
            to={`/movies/${movieId}/cast`}
            state={{ from: locationFrom }}
          >
            Cast
          </LinkCast>
          <LinkRewiews
            to={`/movies/${movieId}/reviews`}
            state={{ from: locationFrom }}
          >
            Reviews
          </LinkRewiews>
        </Section>
      )}
      <FilmMore>
        <Outlet />
      </FilmMore>
    </>
  );
}
