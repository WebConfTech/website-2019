import React from 'react';
import { NavigationItem, MenuIconMobile, CloseIcon } from 'lib/Button';
import MenuNegativeIcon from 'lib/assets/icon-menu-negative.svg';
import CloseNegativeIcon from 'lib/assets/icon-close-negative.svg';
import styles from './styles.module.scss';
import { MENU } from 'data/constants';

export const Menu = ({ currentPath }) => (
  <div className={styles.menu}>
    <div id="menu" className={styles.container}>
      <CloseIcon href="#" mobileOnly className={styles.close}>
        <img src={CloseNegativeIcon} alt="Cerrar menú" />
      </CloseIcon>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {MENU.map(item => (
            <li key={item.url} className={styles.item}>
              <NavigationItem to={item.url} active={currentPath === item.url ? 1 : 0}>
                {item.title}
              </NavigationItem>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <MenuIconMobile href="#menu">
      <img src={MenuNegativeIcon} alt="Abrir menú" />
    </MenuIconMobile>
  </div>
);
