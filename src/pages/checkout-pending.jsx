import React from 'react';
import Link from 'gatsby-link';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { Button } from 'lib/Button';
import styles from './checkout-result.module.scss';
import purchasePendingImage from 'assets/images/purchase-pending.svg';

const CheckoutReviewPage = props => (
  <SectionLayout
    title="¡Gracias!"
    currentPath={props.location.pathname}
    className={styles.section}
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
          Recibirás las instruccionesde
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

export default CheckoutReviewPage;
