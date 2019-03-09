import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { CTALeafLike } from 'lib';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import { CFP } from 'data/constants';
import styles from './styles.module.scss';

export const Footer = () => (
  <div className={styles.container}>
    <div>
      <CTALeafLike href={CFP.url} title={CFP.title} as={OutboundLink} target="_blank">
        {CFP.title}
      </CTALeafLike>
    </div>
    <SocialNetworkLinks />
  </div>
);
