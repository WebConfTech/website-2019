import React from 'react';
import FacebookIcon from 'assets/icons/facebook.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import { SOCIAL } from 'data/constants';
import styles from './styles.module.scss';

export const SocialNetworkLinks = () => (
  <div className={styles.content}>
    <span className={styles.text}>{SOCIAL.title}</span>
    <div className={styles.icons}>
      <a href={SOCIAL.facebook.url} className={styles.icon}>
        <img alt={SOCIAL.facebook.title} src={FacebookIcon} />
      </a>
      <a href={SOCIAL.twitter.url} className={styles.icon}>
        <img alt={SOCIAL.facebook.title} src={TwitterIcon} />
      </a>
      <a href={SOCIAL.instagram.url} className={styles.icon}>
        <img alt={SOCIAL.instagram.title} src={InstagramIcon} />
      </a>
    </div>
  </div>
);
