import { useLocation } from 'react-router-dom';
import noPoster from '../../images/noPoster.jpg';
import {
  MovieLink, Rating, TitleRating, MovieListItem,
  Poster, Gallery, Cover,
} from './MovieList.styled';


export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Gallery>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <MovieListItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
           <Cover> {poster_path ? (<Poster
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />):(<Poster src={noPoster} alt={title} />
            )}
           </Cover>
            <TitleRating>
              <b>{title}</b>
              {vote_average ? (
                <Rating rating={vote_average.toFixed()}>
                 USER SCORE: {(vote_average * 10).toFixed(2)}%
                </Rating>
              ) : (
                <Rating rating={vote_average.toFixed()}>
                  <p>NO USER SCORE</p>
                </Rating>
              )}
            </TitleRating>
          </MovieLink>
        </MovieListItem>
      ))}
    </Gallery>
  );
};

