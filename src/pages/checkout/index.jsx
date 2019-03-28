import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { isPurchaseCreated } from 'data/checkout/selectors';
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

const CheckoutPage = ({ alreadyInitiated }) => {
  useEffect(() => {
    if (alreadyInitiated) {
      navigate('/checkout/review/');
    }
  }, [alreadyInitiated]);

  return (
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
};

const mapStateToProps = state => ({
  alreadyInitiated: isPurchaseCreated(state)
});

export default connect(mapStateToProps)(CheckoutPage);
