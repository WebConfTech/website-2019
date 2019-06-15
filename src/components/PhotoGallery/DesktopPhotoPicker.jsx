import * as R from 'ramda';
import React, { useState, useCallback, useMemo, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import NextIcon from 'assets/images/next.svg';
import PreviousIcon from 'assets/images/previous.svg';
import { PhotoPropTypes } from './propTypes';
import { MinSizePhoto } from './MinSizePhoto';
import styles from './styles.module.scss';

const GUTTER = 50;
const HEIGHT_PROPORTION = 0.66;
const photosRange = R.curry((range, offset, photos) =>
  R.compose(
    R.take(range),
    R.drop(offset)
  )(photos)
);

export const DesktopPhotoPicker = ({ photos, range, onSelect }) => {
  // offset handling callbacks
  const [offset, setOffset] = useState(0);
  const increaseOffset = useCallback(
    () => setOffset(currentOffset => R.min(photos.length - range, currentOffset + range)),
    [photos, setOffset]
  );
  const decreaseOffset = useCallback(
    () => setOffset(currentOffset => R.max(0, currentOffset - range)),
    [setOffset]
  );

  // define previous and next disabled
  const previousDisabled = offset === 0;
  const nextDisabled = offset + range >= photos.length;

  // pick the current photos from the range + offset
  const currentPhotos = useMemo(() => photosRange(range, offset, photos), [range, offset, photos]);
  const preloadPhotos = useMemo(() => photosRange(range, offset + range, photos), [
    range,
    offset,
    photos
  ]);

  // determine thumbnail's width by using the container's width
  const thumbnailsRef = useRef(null);
  const [thumbWidth, setThumbWidth] = useState(null);

  useLayoutEffect(() => {
    const thumbnailsWidth = thumbnailsRef.current.offsetWidth;
    const availableWidth = thumbnailsWidth - GUTTER * (range - 1);
    const width = availableWidth / range;

    setThumbWidth(width);
  }, [thumbnailsRef, range, setThumbWidth]);

  return (
    <>
      <div className={styles.picker}>
        <div className={styles.shadow} />
        <div
          className={`${styles.arrow} ${styles.arrowLeft} ${
            previousDisabled ? styles.arrowDisabled : ''
          }`}
        >
          <img src={PreviousIcon} alt="anterior" onClick={decreaseOffset} />
        </div>
        <div className={styles.thumbnails} ref={thumbnailsRef}>
          {thumbWidth != null
            ? currentPhotos.map(({ id, alt_text, images }) => (
                <div key={id} className={styles.thumbnail}>
                  <MinSizePhoto
                    alt={alt_text}
                    images={images}
                    minSize={thumbWidth}
                    width={thumbWidth}
                    height={thumbWidth * HEIGHT_PROPORTION}
                    onClick={() => onSelect(id)}
                  />
                </div>
              ))
            : null}
        </div>
        <div
          className={`${styles.arrow} ${styles.arrowRight} ${
            nextDisabled ? styles.arrowDisabled : ''
          }`}
        >
          <img src={NextIcon} alt="siguiente" onClick={increaseOffset} />
        </div>
      </div>
      <div className={styles.preloading}>
        {thumbWidth != null
          ? preloadPhotos.map(({ id, alt_text, images }) => (
              <div key={id} className={styles.thumbnail}>
                <MinSizePhoto
                  alt={alt_text}
                  images={images}
                  minSize={thumbWidth}
                  width={thumbWidth}
                  height={thumbWidth * HEIGHT_PROPORTION}
                  onClick={() => onSelect(id)}
                />
              </div>
            ))
          : null}
      </div>
    </>
  );
};

DesktopPhotoPicker.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PhotoPropTypes)).isRequired,
  onSelect: PropTypes.func.isRequired,
  range: PropTypes.number
};

DesktopPhotoPicker.defaultProps = {
  range: 6
};
