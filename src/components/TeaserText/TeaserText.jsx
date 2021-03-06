import React from 'react';
import { connect } from 'react-redux';
import { wasTheEmailSaved } from 'data/email/selectors';
import styles from './styles.module.scss';

const _TeaserText = ({ wasSaved, className = '' }) => (
  <p className={`${styles.teaser} ${className} ${wasSaved ? styles.HideOnMobile : ''}`}>
    Somos la primer conferencia de front-end y tecnologías Web del interior del país.
    <br />
    <strong>¡Sumate a esta nueva experiencia!</strong>
  </p>
);

_TeaserText.displayName = 'TeaserText';

const mapStateToProps = state => ({
  wasSaved: wasTheEmailSaved(state)
});

export const TeaserText = connect(mapStateToProps)(_TeaserText);
