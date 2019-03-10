import React from 'react';

// Layouts
import LandingLayout from 'layouts/landing';

// Components
import { TeaserText } from 'components/TeaserText';
import { EventCountdown } from 'components/EventCountdown';

// Assets
import styles from './index.module.scss';

const IndexPage = () => (
  <LandingLayout>
    <div className={styles.topSection}>
      <TeaserText className={styles.hiddenXs} />
    </div>
    <div className={styles.middleSection}>
      <div className={styles.middleContent}>
        <p className={styles.date}>new Date(11, 5, 2019)</p>
        <p className={styles.venue}>
          Auditorio Diego de Torres (UCC)
          <br />
          Obispo Trejo 323
        </p>
      </div>
    </div>
    <div className={styles.bottomSection}>
      <EventCountdown />
    </div>
  </LandingLayout>
);

export default IndexPage;
