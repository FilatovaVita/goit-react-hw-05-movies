import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { MovieReviewsStyled } from './MovieReviews.styled';
import toast from 'react-hot-toast';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {

      setLoading(true);
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        setError(error);
        return toast.error('Something went wrong..reload the page!');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && !reviews.length && <h1>NO REVIEWS </h1>}
      <MovieReviewsStyled>
        {!error &&
          reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author} :</h2>
              <p>{review.content}</p>
            </li>
          ))}
      </MovieReviewsStyled>
    </>
  );
}
MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
