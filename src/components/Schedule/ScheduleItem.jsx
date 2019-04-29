import React from 'react';
import diamond from 'assets/images/event-diamond.svg';
import styles from './styles.module.scss';

export const ScheduleItem = ({ item }) => (
  <li className={`${styles.item} ${styles.Break}`}>
    <div className={`${styles.image} ${styles.Diamond}`}>
      <img src={diamond} className={styles.diamond} alt="" aria-hidden="true" />
    </div>
    <div className={styles.texts}>
      <h4 className={styles.time}>{item.time}</h4>
      <h2 className={styles.title}>{item.title}</h2>
    </div>
  </li>
);
