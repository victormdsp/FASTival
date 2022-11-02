import React, { FC } from 'react';
import styles from './eventSwipper.module.scss';

interface EventSwipperProps {}

const EventSwipper: FC<EventSwipperProps> = () => (
  <div className={styles.EventSwipper}>
    EventSwipper Component
  </div>
);

export default EventSwipper;
