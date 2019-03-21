import React from 'react';
import Link from 'gatsby-link';
import { Location } from '@reach/router';
import { NavigationItem, MenuIconMobile, CloseIcon } from 'lib/Button';
import CloseNegativeIcon from 'lib/assets/icon-close-negative.svg';
import styles from './styles.module.scss';

// Temp
const CHECKOUT_MENU = [
  {
    title: 'Entradas',
    url: '/checkout',
    enabled: true
  },
  {
    title: 'Medio de pago',
    url: '/checkout/medio-de-pago',
    enabled: false
  },
  {
    title: 'Datos de pago',
    url: '/checkout/datos-de-pago',
    enabled: false
  },
  {
    title: 'Revisá tu compra',
    url: '/checkout/revisa-tu-pago',
    enabled: false
  },
  {
    title: '¡Listo!',
    url: '/checkout/listo',
    enabled: false
  }
];

const AsSpan = props => <span {...props}>{props.children}</span>;

export const CheckoutMenu = ({ className = '', dark, short, hideOnMobile }) => (
  <Location>
    {({ location }) => (
      <div className={`${className} ${hideOnMobile ? styles.hideOnMobile : ''}`}>
        <div id="menu" className={styles.container}>
          <CloseIcon href="#" mobileOnly className={styles.close}>
            <img src={CloseNegativeIcon} alt="Cerrar menú" />
          </CloseIcon>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {CHECKOUT_MENU.map(item => (
                <li key={item.url} className={styles.item}>
                  <NavigationItem
                    as={item.enabled ? Link : AsSpan}
                    to={item.url}
                    active={location.pathname === item.url ? 1 : 0}
                    disabled={!item.enabled}
                  >
                    {item.title}
                  </NavigationItem>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <MenuIconMobile dark={dark} short={short} href="#menu" />
      </div>
    )}
  </Location>
);
