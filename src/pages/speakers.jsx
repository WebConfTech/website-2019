import React from 'react';
import Photo from 'assets/images/banner-background-mobile.png';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { SpeakerGrid, Speaker } from 'lib';
import styles from './speakers.module.scss';

const SpeakersPage = () => (
  <SectionLayout title="disertantes">
    <SectionTitle>Disertantes</SectionTitle>
    <SpeakerGrid className={styles.speakersGrid}>
      <Speaker
        firstName="Agus"
        lastName="Carrasco"
        image={Photo}
        description="test description"
        twitterHandle="asermax"
      />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
      <Speaker firstName="Agus" lastName="Carrasco" image={Photo} description="test description" />
    </SpeakerGrid>
  </SectionLayout>
);

export default SpeakersPage;
