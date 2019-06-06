import React from 'react';
import { HOME_VIDEO } from 'data/constants';
import styles from './styles.module.scss';

export const YouTubePlayer = () => (
  <div className={styles.videoPlayerContainer}>
    <iframe
      className={styles.videoPlayer}
      title="resumen"
      frameBorder="0"
      height="100%"
      width="100%"
      src={`https://youtube.com/embed/${
        HOME_VIDEO.videoId
      }?version=3&autoplay=1&loop=1&controls=1&playlist=h6sbrtMnMzM`}
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
);
