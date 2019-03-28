import * as R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { isPurchaseCreated } from 'data/checkout/selectors';
import { CheckoutMenu } from 'components/Menu';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { PaymentReviewCard } from 'components/PaymentReviewCard';
import styles from './review.module.scss';

const CHECKOUT_MENU = [
  {
    title: 'Entradas',
    url: '/checkout/',
    enabled: true
  },
  {
    title: 'Revisá tu compra',
    url: '/checkout/review/',
    enabled: true
  },
  {
    title: '¡Listo!',
    enabled: false
  }
];

const CheckoutReviewPage = ({ alreadyInitiated }) => {
  const menu = R.adjust(
    0,
    R.evolve({
      enabled: R.always(!alreadyInitiated)
    })
  )(CHECKOUT_MENU);

  return (
    <SectionLayout
      title="Revisá tu compra"
      className={styles.section}
      menuComponent={() => <CheckoutMenu items={menu} short hideOnMobile />}
      mobileBackButtonRoute={alreadyInitiated ? null : '/checkout/'}
      hideFooterOnMobile
    >
      <SectionTitle>Entradas</SectionTitle>
      <div className={styles.reviewContainer}>
        <PaymentReviewCard />
      </div>
    </SectionLayout>
  );
};

const mapStateToProps = state => ({
  alreadyInitiated: isPurchaseCreated(state)
});

export default connect(mapStateToProps)(CheckoutReviewPage);
