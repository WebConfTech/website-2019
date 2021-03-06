import React from 'react';
import SectionLayout, { SectionTitle } from 'layouts/section';
import { SpeakerGrid, Speaker } from 'lib';
import { SPEAKERS } from 'data/constants';
import styles from './speakers.module.scss';

const SpeakersPage = () => (
  <SectionLayout title="disertantes" className={styles.section} newsletter cta>
    <SectionTitle>Disertantes</SectionTitle>
    <SpeakerGrid className={styles.grid}>
      {SPEAKERS.map((speaker, index) => (
        <Speaker key={index} {...speaker} />
      ))}
    </SpeakerGrid>
  </SectionLayout>
);

export default SpeakersPage;
