import React from 'react';
import { CTALeafLike } from 'lib';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import { CFP } from 'data/constants';
import styles from './styles.module.scss';

export const Footer = () => (
  <div className={styles.container}>
    <div>
      <CTALeafLike href={CFP.url} title={CFP.title} target="_blank">
        {CFP.title}
      </CTALeafLike>
    </div>
    <SocialNetworkLinks />
  </div>
);
