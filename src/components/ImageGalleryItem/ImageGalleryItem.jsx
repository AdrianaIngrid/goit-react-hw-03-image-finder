import React from "react";
import styles from './ImageGaleryItem.module.css';
function ImageGalleryItem({ image }) {
    return (
        <li className={styles.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
}
export default ImageGalleryItem;