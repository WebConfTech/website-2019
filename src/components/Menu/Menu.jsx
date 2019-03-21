import React from 'react';
import Link from 'gatsby-link';
import { Location } from '@reach/router';
import { NavigationItem, MenuIconMobile, CloseIcon } from 'lib/Button';
import CloseNegativeIcon from 'lib/assets/icon-close-negative.svg';
import styles from './styles.module.scss';
import { MENU } from 'data/constants';

export const Menu = ({ className = '', dark, short, hideOnMobile }) => (
  <Location>
    {({ location }) => (
      <div className={`${className} ${hideOnMobile ? styles.hideOnMobile : ''}`}>
        <div id="menu" className={styles.container}>
          <CloseIcon href="#" mobileOnly className={styles.close}>
            <img src={CloseNegativeIcon} alt="Cerrar menú" />
          </CloseIcon>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {MENU.map(item => (
                <li key={item.url} className={styles.item}>
                  <NavigationItem
                    to={item.url}
                    active={location.pathname === item.url ? 1 : 0}
                    as={Link}
                  >
                    {item.title}
                  </NavigationItem>
                </li>
              ))}
              <li className={styles.item}>
                <NavigationItem href="mailto:hola@webconf.tech">Escríbenos</NavigationItem>
              </li>
            </ul>
          </nav>
        </div>
        <MenuIconMobile dark={dark} short={short} href="#menu" />
      </div>
    )}
  </Location>
);
