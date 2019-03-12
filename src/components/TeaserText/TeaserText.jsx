import React from 'react';
import { connect } from 'react-redux';
import { wasTheEmailSaved } from 'data/email/selectors';
import styles from './styles.module.scss';

const _TeaserText = ({ wasSaved, className = '' }) => (
  <p className={`${styles.teaser} ${className} ${wasSaved ? styles.HideOnMobile : ''}`}>
    Estamos preparándonos para la primer conferencia de front-end y tecnologías Web del interior del
    país. <strong>¿Te la vas a perder?</strong>
  </p>
);

_TeaserText.displayName = 'TeaserText';

const mapStateToProps = state => ({
  wasSaved: wasTheEmailSaved(state)
});

export const TeaserText = connect(mapStateToProps)(_TeaserText);
