import React from 'react';
import SectionLayout from 'layouts/section';
import styles from './sponsors.module.scss';
import { SponsorsList } from 'components/SponsorsList';
import { SPONSORS } from 'data/constants';

const SponsorsPage = () => (
  <SectionLayout title="Sponsors" className={styles.section} hideFooterOnMobile cta>
    <div className={styles.container}>
      <div className={styles.texts}>
        <p className={styles.text}>
          Nada de esta conferencia sería posible sin la ayuda de nuestros maravillosos sponsors.
        </p>
        <p className={styles.text}>
          ¡Agradecemos a cada una de las empresas que se unió a este proyecto por su colaboración y
          su confianza en la primer edición de la Córdoba WebConf 2019!
        </p>
      </div>
      <div className={styles.sponsorsContainer}>
        <SponsorsList
          title="&lt;Sponsors GOLD /&gt;"
          sponsors={SPONSORS.gold}
          className={styles.list}
          gold
        />
        <SponsorsList
          title="&lt;Sponsors Silver /&gt;"
          sponsors={SPONSORS.silver}
          className={styles.list}
          silver
        />
        <SponsorsList
          title="&lt;Sponsors Bronze /&gt;"
          sponsors={SPONSORS.bronze}
          className={styles.list}
        />
      </div>
    </div>
  </SectionLayout>
);

export default SponsorsPage;
