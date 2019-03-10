import React from 'react';

// Layouts
import LandingLayout from 'layouts/landing';

// Components
import { TeaserText } from 'components/TeaserText';

// Assets
import styles from './index.module.scss';

const IndexPage = () => (
  <LandingLayout>
    <div className={styles.topSection}>
      <TeaserText className={styles.hiddenXs} />
    </div>
    <div className={styles.middleSection} />
  </LandingLayout>
);

export default IndexPage;
