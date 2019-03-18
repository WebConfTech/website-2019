import React from 'react';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';
import styles from './checkout.module.scss';

const CheckoutPage = props => (
  <SectionLayout
    sectionTitle="Entradas"
    currentPath={props.location.pathname}
    className={styles.section}
  >
    <SectionTitle>Entradas</SectionTitle>
    <div className={styles.tickets}>
      <TicketSelector />
      <TicketForm />
    </div>
  </SectionLayout>
);

export default CheckoutPage;
