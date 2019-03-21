import React from 'react';
import Link from 'gatsby-link';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { Button } from 'lib/Button';
import styles from './checkout-result.module.scss';
import purchaseOkImage from 'assets/images/purchase-ok.svg';

const CheckoutReviewPage = props => (
  <SectionLayout
    title="¡Gracias!"
    currentPath={props.location.pathname}
    className={styles.section}
    hideFooterOnMobile
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
            VOLVER AL SITIO
          </Button>
        </p>
      </div>
    </div>
  </SectionLayout>
);

export default CheckoutReviewPage;
