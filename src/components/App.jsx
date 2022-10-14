import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import getFetchApi from './services/fetchApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuarry, setSearchQuarry] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [modalImageURL, setModalImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    getFetchedImg();
  }, [searchQuarry]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setImages([]);
    const { value } = evt.target.serchInput;
    setSearchQuarry(value);
    setPage(1);
  };

  const getFetchedImg = async () => {
    setIsLoading(true);
    try {
      const response = await getFetchApi({
        page: page,
        searchQuarry: searchQuarry,
      });
      setImages(prev => [...prev, ...response.hits]);
      setPage(prev => prev + 1);
      setTotalHits(response.totalHits);
    } catch (err) {
      setError(err);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleModal = largeImageURL => {
    setModalImageURL(largeImageURL);
    setShowModal(prev => !prev);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onClick={handleToggleModal}></ImageGallery>
      {images.length < totalHits && <Button onClick={getFetchedImg}></Button>}
      {isLoading && <Loader />}
      {showModal && (
        <Modal imgUrl={modalImageURL} toggleModal={handleToggleModal} />
      )}
    </div>
  );
};

export default App;
