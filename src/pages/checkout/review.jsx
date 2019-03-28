import React from 'react';
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

const CheckoutReviewPage = ({ alreadyInitiated }) => (
  <SectionLayout
    title="Revisá tu compra"
    className={styles.section}
    menuComponent={() => <CheckoutMenu items={CHECKOUT_MENU} short hideOnMobile />}
    mobileBackButtonRoute="/checkout/"
    hideFooterOnMobile
  >
    <SectionTitle>Entradas</SectionTitle>
    <div className={styles.reviewContainer}>
      <PaymentReviewCard />
    </div>
  </SectionLayout>
);

export default CheckoutReviewPage;
