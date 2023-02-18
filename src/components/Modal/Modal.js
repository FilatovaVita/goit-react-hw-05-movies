import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import { ModalField, ModalOverlay } from './Modal.styled';

export const Modal = ({ src, onClose }) => {
  useEffect(() => {
    const closeModalOnEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeModalOnEsc);
    return document.removeEventListener('keydown', closeModalOnEsc);
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={onBackdropClick}>
      <Iframe
        url={`https://www.youtube.com/embed/${src}; frameborder="0"; allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen`}
        width="1040px"
        height="640px"
      />
    </ModalOverlay>
  );
};
Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
