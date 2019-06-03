import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowWidth } from 'common/hooks';
import { PhotoPropTypes } from './propTypes';
import { MinSizePhoto } from './MinSizePhoto';
import styles from './styles.module.scss';

const HEIGHT_PROPORTION = 0.66;
const GUTTER = 16;

export const MobilePhotoPicker = ({ photos, range, onSelect }) => {
  const [thumbWidth, setThumbWidth] = useState(null);
  const windowWidth = useWindowWidth();

  useLayoutEffect(() => {
    const availableWidth = windowWidth - GUTTER;
    const width = availableWidth / 2;

    setThumbWidth(width);
  }, [windowWidth, setThumbWidth]);

  return (
    <div className={styles.picker}>
      {thumbWidth != null
        ? photos.map(({ id, alt_text, images }) => (
            <div key={id} className={styles.thumbnail}>
              <MinSizePhoto
                alt={alt_text}
                images={images}
                width={thumbWidth}
                height={thumbWidth * HEIGHT_PROPORTION}
                minSize={thumbWidth}
                onClick={() => onSelect(id)}
                lazy
              />
            </div>
          ))
        : null}
    </div>
  );
};

MobilePhotoPicker.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PhotoPropTypes)).isRequired,
  onSelect: PropTypes.func.isRequired
};
