import React from 'react';

// Layouts
import LandingLayout from 'layouts/landing';

// Components
import { AddEmailForm } from 'components/AddEmailForm';
import { TeaserText } from 'components/TeaserText';

// Assets
import styles from './index.module.scss';
import MainLogoImage from 'assets/images/logo-main.svg';
import JumboBracketImage from 'assets/images/jumbo-bracket.svg';

const IndexPage = () => (
  <LandingLayout>
    <div className={styles.topSection}>
      <div>
        <img
          className={styles.mainLogo}
          alt="Logo principal de Webconf edición 2019"
          src={MainLogoImage}
        />
      </div>
      <TeaserText className={styles.hiddenXs} />
    </div>
    <div className={styles.middleSection}>
      <div className={styles.bracketContainer}>
        <img className={styles.bracket} src={JumboBracketImage} alt="Left jumbo bracket" />
      </div>
      <div className={styles.middleContent}>
        <TeaserText className={styles.hiddenLg} />
        <div className={styles.addEmailFormContainer}>
          <AddEmailForm />
        </div>
      </div>
      <div className={styles.bracketContainer}>
        <img
          className={`${styles.bracket} ${styles.bracketRight} ${styles.hiddenXs}`}
          src={JumboBracketImage}
          alt="Right jumbo bracket"
        />
      </div>
    </div>
  </LandingLayout>
);

export default IndexPage;
