import React from 'react';
import FacebookIcon from 'assets/icons/facebook.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import styles from './styles.module.scss';

export const SocialNetworkLinks = ({ useContainer }) => {
  const _useContainer = typeof useContainer === 'undefined' ? true : useContainer;
  let content = (
    <div className={styles.content}>
      <span className={styles.text}>Seguinos en nuestras redes</span>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/WebConfCBA/" className={styles.icon}>
          <img alt="Webconf Facebook Profile" src={FacebookIcon} />
        </a>
        <a href="http://twitter.com/WebConfCBA" className={styles.icon}>
          <img alt="Webconf Twitter Profile" src={TwitterIcon} />
        </a>
        <a href="http://instagram.com/webconfcba" className={styles.icon}>
          <img alt="Webconf Instagram Profile" src={InstagramIcon} />
        </a>
      </div>
    </div>
  );

  if (_useContainer) {
    content = <div class={styles.container}>{content}</div>;
  }

  return content;
};
