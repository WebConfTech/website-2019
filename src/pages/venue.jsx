import React, { useState } from 'react';
import { VENUE_MOBILE_DEFAULT_ZOOM, VENUE_DESKTOP_DEFAULT_ZOOM } from 'data/constants';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { CTALeafLike, CloseButton } from 'lib/Button';
import { VenueMap } from 'components/VenueMap';
import VenuePhoto1 from 'assets/images/venue-1.png';
import VenuePhoto2 from 'assets/images/venue-2.png';
import VenuePhoto3 from 'assets/images/venue-3.png';
import styles from './venue.module.scss';

const VenuePage = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <SectionLayout title="lugar" className={styles.section} newsletter cfp>
      <div className={styles.description}>
        <SectionTitle>Lugar</SectionTitle>
        <div className={styles.text}>
          <p className={styles.intro}>
            La edición 2019 de nuestra conferencia se llevará a cabo en el auditorio Diego de
            Torres, de la Universidad Católica de Córdoba.
          </p>
          <p className={styles.summary}>
            Este auditorio, representa por su localización, características tecnológicas e
            infraestructura, una oferta cultural de primer nivel en la Ciudad de Córdoba. Situado a
            escasos metros de la conocida “Manzana Jesuítica” y rodeado de importantes centros
            comerciales y financieros, la sala está cercana a hoteles de categoría y es fácilmente
            accesible mediante transporte público. Concebido dentro de una propuesta arquitectónica
            con un esquema de volumetría semicircular, recoge las cualidades del milenario teatro
            griego.
          </p>
        </div>
        <div>
          <div className={styles.venueContainer}>
            <div className={styles.auditorium}>Auditorio</div>
            <div className={styles.venueName}>Diego de Torres</div>
            <div className={styles.address}>
              <b>Obispo Trejo 323</b>
              <br />
              Ciudad de Córdoba
            </div>
          </div>
          <div className={styles.mapContainerMobile}>
            <VenueMap zoom={VENUE_MOBILE_DEFAULT_ZOOM} />
          </div>
        </div>
      </div>
      <div className={styles.sideContainer}>
        <div className={styles.photos}>
          <img className={styles.photo1} src={VenuePhoto1} alt="foto de los asientos de la venue" />
          <img className={styles.photo2} src={VenuePhoto2} alt="foto del escenario de la venue" />
          <img
            className={styles.photo3}
            src={VenuePhoto3}
            alt="foto de audiencia en un evento en la venue"
          />
        </div>
        <CTALeafLike
          position="right"
          icon="up"
          className={styles.mapOpenButton}
          onClick={() => setShowMap(true)}
        >
          Mapa
        </CTALeafLike>
        {showMap ? (
          <div className={styles.mapContainerDesktop}>
            <CloseButton className={styles.mapCloseButton} onClick={() => setShowMap(false)} />
            <VenueMap zoom={VENUE_DESKTOP_DEFAULT_ZOOM} />
          </div>
        ) : null}
      </div>
    </SectionLayout>
  );
};

export default VenuePage;
