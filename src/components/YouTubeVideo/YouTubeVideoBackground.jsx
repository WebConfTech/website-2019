import React, { useEffect, useRef } from 'react';
import { loadYouTubeVideo } from 'common/utils';
import { HOME_VIDEO } from 'data/constants';
import styles from './styles.module.scss';

export const YouTubeVideoBackground = ({ videoId = 'videoBackground', padding = 200 }) => {
  let playerInstance;
  const container = useRef(null);

  const updatePlayersSize = () => {
    if (playerInstance && container.current) {
      const width = global.innerWidth + padding;
      const height = global.innerHeight + padding;

      if (width / height > 16 / 9) {
        playerInstance.setSize(width, (width / 16) * 9);
        container.current.style.left = '0px';
      } else {
        playerInstance.setSize((height / 9) * 16, height);
        const containerLeft = Math.min(-(container.current.clientWidth - width) / 2, 0);
        container.current.style.left = `${containerLeft}px`;
      }
    }
  };

  useEffect(() => {
    loadYouTubeVideo(
      'videoBackground',
      HOME_VIDEO,
      {},
      {
        activeClass: styles.active
      }
    )
      .then(player => {
        playerInstance = player;
        global.addEventListener('load', updatePlayersSize);
        global.addEventListener('resize', updatePlayersSize);
        updatePlayersSize();
      })
      .catch(error => {
        console.warn('Unable to load the background video', error);
      });

    return () => {
      global.removeEventListener('load', updatePlayersSize);
      global.removeEventListener('resize', updatePlayersSize);
    };
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={`${styles.screen} mute`} id={videoId} />
    </div>
  );
};
