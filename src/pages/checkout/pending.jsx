import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearTickets, clearPurchase } from 'data/checkout/actions';
import Link from 'gatsby-link';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { Button } from 'lib/Button';
import { CheckoutMenu } from 'components/Menu';
import styles from './result.module.scss';
import purchasePendingImage from 'assets/images/purchase-pending.svg';

const CHECKOUT_MENU = [
  {
    title: 'Entradas',
    enabled: false
  },
  {
    title: 'Revisá tu compra',
    enabled: false
  },
  {
    title: '¡Listo!',
    url: '/checkout/pending/',
    enabled: true
  }
];

const CheckoutPendingPage = ({ clear }) => {
  useEffect(() => {
    clear();
  }, []);

  return (
    <SectionLayout
      title="¡Gracias!"
      className={styles.section}
      menuComponent={() => <CheckoutMenu items={CHECKOUT_MENU} short hideOnMobile />}
      hideFooterOnMobile
      hideSidebarOnMobile
    >
      <SectionTitle>¡Gracias!</SectionTitle>
      <div className={styles.container}>
        <h2 className={styles.title}>¡Ya casi estás!</h2>
        <div className={styles.imageContainer}>
          <img src={purchasePendingImage} className={styles.image} alt="¡Felicidades!" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <strong>Sólo falta un paso.</strong>
          </p>
          <p className={styles.text}>
            Recibirás las instrucciones de
            <br />
            pago en el correo
            <br />
            que indicaste al pagar.
            <br />
            Una vez confirmado
            <br />
            el pago, te enviaremos
            <br />
            las entradas.
          </p>
          <p className={styles.text}>
            <Button as={Link} className={styles.button} to="/" large>
              Volver al sitio
            </Button>
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  clear: () => {
    dispatch(clearTickets());
    dispatch(clearPurchase());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutPendingPage);
