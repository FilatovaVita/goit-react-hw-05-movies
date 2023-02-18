import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../utils/api';
import { Loader } from '../Loader/Loader';
import noPoster from '../../images/noPoster.jpg';
import { CastGallery, CastPoster } from './MovieCast.styled';
import toast from 'react-hot-toast';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      setLoading(true);
      try {
        const response = await getMovieCast(movieId);
        setCast(response);
      } catch (error) {
        setError(error);
        return toast.error('Something went wrong..reload the page!');
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {cast.length ? (
        <CastGallery>
          {!error &&
            cast.map(({ name, character, profile_path, id }) => (
              <li key={id}>
                {profile_path ? (
                  <CastPoster
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={name}
                    loading="lazy"
                  />
                ) : (
                  <CastPoster src={noPoster} alt={name} />
                )}
                <div>
                  <p>{name}</p>
                  <p>
                    <b>Character: </b> {character}
                  </p>
                </div>
              </li>
            ))}
        </CastGallery>
      ) : (
        <b>NO CAST </b>
      )}
    </div>
  );
}
