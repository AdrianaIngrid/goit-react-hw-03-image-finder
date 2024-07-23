import React from 'react';
import styles from './ImageGaleryItem.module.css';

function ImageGalleryItem({ image, handleModal }) {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => handleModal(image.largeImageURL)}
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
