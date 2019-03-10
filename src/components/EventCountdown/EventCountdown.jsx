import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { EVENT_DATE } from 'data/constants';
import styles from './styles.module.scss';

const padNumber = n => String(n).padStart(2, '0');

const calculateTimeLeft = () => {
  const timeUntilEvent = moment.duration(moment(EVENT_DATE).diff(moment()));
  const days = Math.trunc(timeUntilEvent.asDays());
  const hours = Math.trunc(timeUntilEvent.subtract(days, 'days').asHours());
  const minutes = Math.trunc(timeUntilEvent.subtract(hours, 'hours').asMinutes());
  const seconds = Math.trunc(timeUntilEvent.subtract(minutes, 'minutes').asSeconds());

  return {
    days: padNumber(days),
    hours: padNumber(hours),
    minutes: padNumber(minutes),
    seconds: padNumber(seconds)
  };
};

export const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    let id = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(id);
  }, [setTimeLeft]);

  return (
    <div className={styles.container}>
      <p className={styles.missing}>Faltan</p>
      <p className={styles.countdown}>
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </p>
      <p className={styles.doorOpening}>para abrir nuestras puertas</p>
    </div>
  );
};
