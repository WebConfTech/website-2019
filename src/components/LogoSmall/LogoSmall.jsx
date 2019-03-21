import React from 'react';
import Link from 'gatsby-link';
import MobileLogoImage from 'assets/images/logo-mobile.svg';
import styles from './styles.module.scss';

export const LogoSmall = ({ className = '', disabled = false }) => {
  const image = (
    <img
      className={styles.logo}
      alt="Logo principal de Webconf edición 2019"
      src={MobileLogoImage}
    />
  );

  return disabled ? (
    <div className={`${styles.container} ${className}`}>{image}</div>
  ) : (
    <Link to="/">{image}</Link>
  );
};
