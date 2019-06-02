import * as R from 'ramda';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import theme from 'lib/theme';
import { useWindowWidth } from 'common/hooks';
import { PhotoPropTypes } from './propTypes';
import { MinSizePhoto } from './MinSizePhoto';
import { DesktopPhotoPicker } from './DesktopPhotoPicker';
import { MobilePhotoPicker } from './MobilePhotoPicker';
import styles from './styles.module.scss';

export const PhotoGallery = ({ photos }) => {
  const [current, setCurrent] = useState(R.head(photos).id);
  const currentPhoto = useMemo(() => R.find(R.propEq('id', current))(photos), [current, photos]);
  const windowWidth = useWindowWidth();

  let pickerRange = 5;
  let PickerComponent = DesktopPhotoPicker;

  if (windowWidth > theme.breakpoints.smallScreen) {
    pickerRange = 6;
  } else {
    PickerComponent = MobilePhotoPicker;
  }

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
      <PickerComponent photos={photos} onSelect={setCurrent} range={pickerRange} />
    </div>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PhotoPropTypes))
};
