import React from 'react';
import { CheckoutMenu } from 'components/Menu';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';
import styles from './index.module.scss';

const CheckoutPage = props => (
  <SectionLayout
    title="Entradas"
    currentPath={props.location.pathname}
    className={styles.section}
    menuComponent={() => <CheckoutMenu short />}
  >
    <SectionTitle>Entradas</SectionTitle>
    <div className={styles.tickets}>
      <TicketSelector />
      <TicketForm />
    </div>
  </SectionLayout>
);

export default CheckoutPage;
