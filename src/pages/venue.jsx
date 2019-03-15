import React from 'react';
import SectionLayout, { SectionTitle } from 'layouts/section';
import styles from './venue.module.scss';

const VenuePage = () => (
  <SectionLayout title="lugar" className={styles.section}>
    <div>
      <SectionTitle>Lugar</SectionTitle>
      <p>
        La edición 2019 de nuestra conferencia se llevará a cabo en el auditorio Diego de Torres, de
        la Universidad Católica de Córdoba.
      </p>
      <p>
        Este auditorio, representa por su localización, características tecnológicas e
        infraestructura, una oferta cultural de primer nivel en la Ciudad de Córdoba. Situado a
        escasos metros de la conocida “Manzana Jesuítica” y rodeado de importantes centros
        comerciales y financieros, la sala está cercana a hoteles de categoría y es fácilmente
        accesible mediante transporte público. Concebido dentro de una propuesta arquitectónica con
        un esquema de volumetría semicircular, recoge las cualidades del milenario teatro griego.
      </p>
    </div>
    <div>Fotos</div>
  </SectionLayout>
);

export default VenuePage;
