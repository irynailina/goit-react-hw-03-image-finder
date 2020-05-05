import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css'
import PropTypes from 'prop-types'


const ImageGallery = ({images}) => (
    <>
    <ul className={styles.ImageGallery} >
    {images.map(image => <ImageGalleryItem key={image.id} image={image} />)}
    
</ul>
</>
);

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
}