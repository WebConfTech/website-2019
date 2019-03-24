import React from 'react';
import { CheckoutMenu } from 'components/Menu';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';
import styles from './index.module.scss';

const CHECKOUT_MENU = [
  {
    title: 'Entradas',
    url: '/checkout/',
    enabled: true
  },
  {
    title: 'Revisá tu compra',
    url: '/checkout/review/',
    enabled: false
  },
  {
    title: '¡Listo!',
    enabled: false
  }
];

const CheckoutPage = () => (
  <SectionLayout
    title="Entradas"
    className={styles.section}
    menuComponent={() => <CheckoutMenu items={CHECKOUT_MENU} short />}
  >
    <SectionTitle>Entradas</SectionTitle>
    <div className={styles.tickets}>
      <TicketSelector />
      <TicketForm />
    </div>
  </SectionLayout>
);

export default CheckoutPage;
