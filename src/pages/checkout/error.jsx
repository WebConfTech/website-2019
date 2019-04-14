import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearPurchase } from 'data/checkout/actions';
import Link from 'gatsby-link';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { Button } from 'lib/Button';
import { CheckoutMenu } from 'components/Menu';
import styles from './result.module.scss';
import purchaseErrorImage from 'assets/images/purchase-error.svg';

const CHECKOUT_MENU = [
  {
    title: 'Entradas',
    url: '/checkout',
    enabled: true
  },
  {
    title: 'Revisá tu compra',
    url: '/checkout/review',
    enabled: true
  },
  {
    title: 'Ocurrió un problema',
    url: '/checkout/error',
    enabled: true
  }
];

const CheckoutErrorPage = ({ clear }) => {
  useEffect(() => {
    clear();
  }, []);

  return (
    <SectionLayout
      title="Error"
      className={styles.section}
      menuComponent={() => <CheckoutMenu items={CHECKOUT_MENU} short hideOnMobile />}
      hideFooterOnMobile
      hideSidebarOnMobile
    >
      <SectionTitle>Entradas</SectionTitle>
      <div className={styles.container}>
        <h2 className={styles.title}>Uff...</h2>
        <div className={styles.imageContainer}>
          <img src={purchaseErrorImage} className={styles.image} alt="Error" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <strong>Algo salió mal.</strong>
          </p>
          <p className={styles.text}>
            Puede que haya algún
            <br />
            problema con la forma
            <br />
            de pago que elegiste.
          </p>
          <p className={styles.text}>
            Elegí otra forma de pago
            <br />e intentá nuevamente.
          </p>
          <p className={styles.text}>
            <Button as={Link} className={styles.button} to="/checkout/review/" large={1}>
              Volver al principio
            </Button>
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearPurchase())
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutErrorPage);
