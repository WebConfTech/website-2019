import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'lib/Button';

// Layouts
import LandingLayout from 'layouts/landing';

// Components
import { TeaserText } from 'components/TeaserText';

// Assets
import SpeakersImage from 'assets/images/speakershome.png';
import styles from './index.module.scss';

const IndexPage = () => (
  <LandingLayout>
    <div className={styles.topSection}>
      <div className={styles.topLeft}>
        <TeaserText className={styles.teaser} />
        <Button as={Link} to="/schedule" large={1} className={styles.schedule}>
          Descubrí la Agenda
        </Button>
      </div>
      <div className={styles.topRight}>
        <img src={SpeakersImage} alt="speakers" />
        <Link to="/schedule" className={styles.agenda}>
          Agenda
        </Link>
      </div>
    </div>
    <div className={styles.middleSection}>
      <div className={styles.middleStrut} />
      <div className={styles.middleContent}>
        <p className={styles.date}>Sáb. 11/05, 08:30 hs.</p>
        <p className={styles.venue}>
          Auditorio Diego de Torres (UCC)
          <br />
          Obispo Trejo 323
        </p>
      </div>
    </div>
  </LandingLayout>
);

export default IndexPage;
