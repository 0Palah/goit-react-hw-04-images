import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ imgUrl, toggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handlePressEsc);

    return () => window.removeEventListener('keydown', handlePressEsc);
    // eslint-disable-next-line
  }, []);

  const handlePressEsc = evt => {
    if (evt.code === 'Escape') toggleModal();
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) toggleModal();
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgUrl: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default Modal;
