import React from 'react';
import { RenderForScreen } from 'components/RenderForScreen';
import { YouTubeVideoBackground, YouTubePlayer } from 'components/YouTubeVideo';
// Layouts
import LandingLayout from 'layouts/landing';

import styles from './index.module.scss';

const IndexPage = () => (
  <LandingLayout>
    <div className={styles.videoBackground}>
      <div className={styles.videoForeground}>
        <RenderForScreen
          onMobile={() => <YouTubePlayer />}
          onDesktop={() => <YouTubeVideoBackground />}
        />
      </div>
    </div>
  </LandingLayout>
);

export default IndexPage;
