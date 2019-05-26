import React from 'react';

// Layouts
import LandingLayout from 'layouts/landing';

import styles from './index.module.scss';

const IndexPage = () => (
  <LandingLayout>
    <div class={styles.videoBackground}>
      <div class={styles.videoForeground}>
        <iframe
          title="resumen"
          frameborder="0"
          height="100%"
          width="100%"
          src="https://youtube.com/embed/h6sbrtMnMzM?version=3&autoplay=1&loop=1&controls=1&playlist=h6sbrtMnMzM"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    </div>
  </LandingLayout>
);

export default IndexPage;
