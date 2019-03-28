import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearTickets, clearPurchase } from 'data/checkout/actions';
import Link from 'gatsby-link';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { Button } from 'lib/Button';
import { CheckoutMenu } from 'components/Menu';
import styles from './result.module.scss';
import purchaseOkImage from 'assets/images/purchase-ok.svg';

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
    url: '/checkout/success/',
    enabled: true
  }
];

const CheckoutSuccessPage = ({ clear }) => {
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
        <h2 className={styles.title}>¡Felicidades!</h2>
        <div className={styles.imageContainer}>
          <img src={purchaseOkImage} className={styles.image} alt="¡Felicidades!" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <strong>¡Ya está todo listo!</strong>
          </p>
          <p className={styles.text}>
            Recibirás tus entradas
            <br />
            en la dirección de correo
            <br />
            que nos indicaste.
          </p>
          <p className={styles.text}>
            ¡Nos vemos
            <br />
            el 11 de Mayo!
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
)(CheckoutSuccessPage);
