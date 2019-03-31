import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const Ticket = ({ name, dni, email }) => (
  <div className={styles.ticket}>
    <span className={styles.ticketLabel}>{name}</span>
    <span className={styles.ticketDetail}>
      {dni} - {email}
    </span>
  </div>
);

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
