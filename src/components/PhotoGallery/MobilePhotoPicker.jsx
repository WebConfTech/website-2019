import React from 'react';
import PropTypes from 'prop-types';
import { PhotoPropTypes } from './propTypes';
import { MinSizePhoto } from './MinSizePhoto';
import styles from './styles.module.scss';

export const MobilePhotoPicker = ({ photos, range, onSelect }) => (
  <div className={styles.picker}>
    {photos.map(({ id, alt_text, images }) => (
      <div key={id} className={styles.thumbnail}>
        <MinSizePhoto alt={alt_text} images={images} minSize={200} onClick={() => onSelect(id)} />
      </div>
    ))}
  </div>
);

MobilePhotoPicker.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PhotoPropTypes)).isRequired,
  onSelect: PropTypes.func.isRequired
};
