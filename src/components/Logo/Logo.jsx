import React from 'react';
import Link from 'gatsby-link';
import MainLogoImage from 'assets/images/logo-main.svg';
import styles from './styles.module.scss';

export const Logo = ({ className = '', ...props }) => (
  <Link to="/" className={`${styles.container} ${className}`} {...props}>
    <img className={styles.logo} alt="Logo principal de Webconf edición 2019" src={MainLogoImage} />
  </Link>
);
