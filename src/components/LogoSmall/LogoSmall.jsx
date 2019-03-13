import React from 'react';
import MobileLogoImage from 'assets/images/logo-mobile.svg';
import styles from './styles.module.scss';

const LogoSmall = ({ className = '' }) => (
  <Link to="/" className={`${styles.container} ${className}`}>
    <img
      className={styles.logo}
      alt="Logo principal de Webconf edición 2019"
      src={MobileLogoImage}
    />
  </Link>
);
