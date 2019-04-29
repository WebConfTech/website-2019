import React from 'react';
import styles from './styles.module.scss';

export const ScheduleList = ({ children }) => (
  <div className={styles.listContainer}>
    <ul className={styles.list}>{children}</ul>
  </div>
);
