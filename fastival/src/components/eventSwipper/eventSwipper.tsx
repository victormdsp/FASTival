import React, { FC } from "react";
import styles from "./EventSwipper.module.css";

interface EventSwipperProps {}

const EventSwipper: FC<EventSwipperProps> = () => (
  <div className={styles.EventSwipper}>EventSwipper Component</div>
);

export default EventSwipper;
