import * as R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { isCurrentTicketValid } from 'data/checkout/selectors';
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

const CheckoutPage = ({ location, isValid }) => {
  const menu = R.adjust(1, R.assoc('enabled', isValid))(CHECKOUT_MENU);

  return (
    <SectionLayout
      title="Entradas"
      currentPath={location.pathname}
      className={styles.section}
      menuComponent={() => <CheckoutMenu items={menu} short />}
    >
      <SectionTitle>Entradas</SectionTitle>
      <div className={styles.tickets}>
        <TicketSelector />
        <TicketForm />
      </div>
    </SectionLayout>
  );
};

const mapStateToProps = state => ({
  isValid: isCurrentTicketValid(state)
});

export default connect(mapStateToProps)(CheckoutPage);
