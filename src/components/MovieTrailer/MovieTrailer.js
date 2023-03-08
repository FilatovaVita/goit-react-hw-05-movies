import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieTrailer } from '../../utils/api';
import { Modal } from '../Modal/Modal';
import { Loader } from '../Loader/Loader';
import toast from 'react-hot-toast';
import noMovie from '../../images/noMovie.jpg';
import { BtnTrailer } from '../Modal/Modal.styled';
import { FaYoutube } from 'react-icons/fa';

export default function MovieTrailer() {
  const [trailers, setTrailers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getTrailer = async () => {
      setLoading(true);
      try {
        const response = await getMovieTrailer(movieId);
        setTrailers(response);
      } catch (error) {
        setError(error);
        return toast.error('Something went wrong..reload the page!');
      } finally {
        setLoading(false);
      }
    };
    getTrailer();
  }, [movieId]);
  let key =
    trailers
      .filter(trailer => trailer.name === 'Official Trailer')
      .map(trailer => trailer.key) + '';

  console.log(key);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {loading && <Loader />}
      {isModalOpen && <Modal onClose={closeModal} src={key} />}
      <BtnTrailer onClick={() => setIsModalOpen(true)}>
        <FaYoutube style={{ width: 180, height: 80 }} />
      </BtnTrailer>
      {!movieId && error && <img src={noMovie} alt="" />}
    </>
  );
}
