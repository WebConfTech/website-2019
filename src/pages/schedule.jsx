import React from 'react';
import SectionLayout from 'layouts/section';
import styles from './schedule.module.scss';
import { ScheduleList, ScheduleItem, ScheduleSpeakerItem } from 'components/Schedule';
import { SCHEDULE, SPEAKERS } from 'data/constants';

const speakersById = SPEAKERS.reduce((acc, speaker) => ({ ...acc, [speaker.id]: speaker }), {});

const SchedulePage = () => (
  <SectionLayout title="Cronograma" className={styles.section} cta>
    <div className={styles.container}>
      <ScheduleList>
        {SCHEDULE.map(item =>
          item.speakerId ? (
            <ScheduleSpeakerItem
              key={item.time}
              item={item}
              speaker={speakersById[item.speakerId]}
            />
          ) : (
            <ScheduleItem key={item.time} item={item} />
          )
        )}
      </ScheduleList>
    </div>
  </SectionLayout>
);

export default SchedulePage;
