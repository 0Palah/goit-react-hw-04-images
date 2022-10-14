import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {' '}
      {images.map(el => {
        return (
          <ImageGalleryItem
            key={el.webformatURL}
            webformatURL={el.webformatURL}
            largeImageURL={el.largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ webformatURL: PropTypes.string.isRequired })
  ),
};

export default ImageGallery;
