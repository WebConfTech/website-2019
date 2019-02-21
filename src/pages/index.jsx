import React from 'react';

// Layouts
import DefaultLayout from 'layouts/default';

// Components
import SEO from 'components/seo';
import { AddEmailForm } from 'components/AddEmailForm';

// Assets
import styles from './index.module.scss';
import { CTALeafLike } from 'lib';
import MainLogoImage from 'assets/images/logo-main.svg';
import JumboBracketImage from 'assets/images/jumbo-bracket.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import InstagramIcon from 'assets/icons/instagram.svg';

const IndexPage = () => (
  <DefaultLayout>
    <div className={styles.root}>
      <SEO
        title="WebConf • Córdoba 2019"
        keywords={[`tech`, `conference`, `argentina`, `comunidad`]}
      />
      <div className={styles.topSection}>
        <div>
          <img
            className={styles.mainLogo}
            alt="Logo principal de Webconf edición 2019"
            src={MainLogoImage}
          />
        </div>
        <span className={`${styles.hiddenXs} ${styles.teaser}`}>
          Estamos preparándonos para la primer conferencia de front-end y tecnologías Web
          del interior del país.{' '}
          <span className={styles.teaserEmphasis}>¿Te la vas a perder?</span>
        </span>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.bracketContainer}>
          <img
            className={styles.bracket}
            src={JumboBracketImage}
            alt="Left jumbo bracket"
          />
        </div>
        <div className={styles.middleContent}>
          <span className={`${styles.hiddenLg} ${styles.teaser}`}>
            Estamos preparándonos para la primer conferencia de front-end y tecnologías
            Web del interior del país.{' '}
            <span className={styles.teaserEmphasis}>¿Te la vas a perder?</span>
          </span>
          <span className={styles.textComingSoon}>
            Dejanos tu e-mail y enterate al instante de las novedades!
          </span>
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
      <div className={styles.bottomSection}>
        <div>
          <CTALeafLike
            href="https://bit.ly/speakers-webconf2019"
            target="_blank"
            title="¿Querés dar una charla?"
          >
            ¿Querés dar una charla?
          </CTALeafLike>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={`${styles.hiddenXs} ${styles.socialMedia}`}>
            <span className={styles.textSocialMedia}>Seguinos en nuestras redes</span>
            <div className={styles.icons}>
              <a className={styles.icon} href="https://www.facebook.com/WebConfCBA/">
                <img alt="Webconf Facebook Profile" src={FacebookIcon} />
              </a>
              <a className={styles.icon} href="http://twitter.com/WebConfCBA">
                <img alt="Webconf Twitter Profile" src={TwitterIcon} />
              </a>
              <a className={styles.icon} href="http://instagram.com/webconfcba">
                <img alt="Webconf Instagram Profile" src={InstagramIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default IndexPage;
