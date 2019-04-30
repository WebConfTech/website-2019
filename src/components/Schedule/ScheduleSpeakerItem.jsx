import React from 'react';
import styles from './styles.module.scss';

export const ScheduleSpeakerItem = ({ item, speaker }) => (
  <div className={`${styles.item} ${styles.Speaker}`}>
    <div className={`${styles.image} ${styles.Avatar}`}>
      <img src={speaker.diamond} className={styles.avatar} alt={speaker.name} />
    </div>
    <div className={styles.texts}>
      <h4 className={styles.time}>{item.time}</h4>
      <h2 className={styles.title}>{speaker.title}</h2>
      <h3 className={styles.speaker}>
        {speaker.firstName} {speaker.lastName}
      </h3>
      <p className={styles.text}>{speaker.scheduleDescription}</p>
    </div>
  </div>
);
