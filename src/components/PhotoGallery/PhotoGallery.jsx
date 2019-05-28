import * as R from 'ramda';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useWindowWidth } from 'common/hooks';
import { PhotoPropTypes } from './propTypes';
import { MinSizePhoto } from './MinSizePhoto';
import { PhotoPicker } from './PhotoPicker';
import styles from './styles.module.scss';

export const PhotoGallery = ({ photos }) => {
  const [current, setCurrent] = useState(R.head(photos).id);
  const currentPhoto = useMemo(() => R.find(R.propEq('id', current))(photos), [current, photos]);
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.container}>
      <div className={styles.currentPhotoContainer}>
        <MinSizePhoto
          className={styles.currentPhoto}
          images={currentPhoto.images}
          minSize={windowWidth}
          alt={currentPhoto.alt_text}
        />
      </div>
      <PhotoPicker photos={photos} onSelect={setCurrent} />
    </div>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PhotoPropTypes))
};
