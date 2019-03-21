import React from 'react';
import { CheckoutMenu } from 'components/Menu';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { PaymentReviewCard } from 'components/PaymentReviewCard';
import styles from './checkout-review.module.scss';

const CheckoutReviewPage = props => (
  <SectionLayout
    sectionTitle="Entradas"
    currentPath={props.location.pathname}
    className={styles.section}
    menuComponent={() => <CheckoutMenu short />}
    hideFooterOnMobile
  >
    <SectionTitle>Entradas</SectionTitle>
    <div className={styles.reviewContainer}>
      <PaymentReviewCard />
    </div>
  </SectionLayout>
);

export default CheckoutReviewPage;
