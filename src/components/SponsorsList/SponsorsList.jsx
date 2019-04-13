import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styles from './styles.module.scss';

export const SponsorsList = ({ gold, silver, title, sponsors, className = '' }) => {
  const type = (gold && styles.Gold) || (silver && styles.Silver) || styles.Bronze;
  return (
    <div className={`${styles.container} ${className}`}>
      <h2 className={styles.title}>
        <span>{title}</span>
      </h2>
      <ul className={`${styles.list} ${type}`}>
        {sponsors.map(sponsor => (
          <li key={sponsor.url} className={styles.item}>
            <OutboundLink
              href={sponsor.url}
              title={sponsor.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sponsor.image} alt={sponsor.title} />
            </OutboundLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
