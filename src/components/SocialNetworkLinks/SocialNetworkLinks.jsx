import React from 'react';
import FacebookIcon from 'assets/icons/facebook.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import { INFORMATION } from 'data/constants';
import styles from './styles.module.scss';

export const SocialNetworkLinks = ({ useContainer }) => {
  const _useContainer = typeof useContainer === 'undefined' ? true : useContainer;
  const { social } = INFORMATION;
  let content = (
    <div className={styles.content}>
      <span className={styles.text}>{social.title}</span>
      <div className={styles.icons}>
        <a href={social.facebook.url} className={styles.icon}>
          <img alt={social.facebook.title} src={FacebookIcon} />
        </a>
        <a href={social.twitter.url} className={styles.icon}>
          <img alt={social.facebook.title} src={TwitterIcon} />
        </a>
        <a href={social.instagram.url} className={styles.icon}>
          <img alt={social.instagram.title} src={InstagramIcon} />
        </a>
      </div>
    </div>
  );

  if (_useContainer) {
    content = <div className={styles.container}>{content}</div>;
  }

  return content;
};
