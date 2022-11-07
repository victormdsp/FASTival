import React, { FC } from "react";
import styles from "./EventSection.module.css";

interface EventSectionProps {
  name: string;
  img1: string;
  img2: string;
  img3: string;
  date1: string;
  date2: string;
  date3: string;
  show1: string;
  show2: string;
  show3: string;
  place1: string;
  place2: string;
  place3: string;
}

const EventSection: FC<EventSectionProps> = (props) => {
  return (
    <div className={styles.EventSection}>
      <h2>{props.name}</h2>
      <div className={styles.showsDiv}>
        <div className={styles.showPart1}>
          <div className={styles.divImg}>
            <img src={props.img1} alt="" />
          </div>
          <h4>{props.date1}</h4>
          <h5>{props.show1}</h5>
          <h6>{props.place1}</h6>
        </div>
        <div className={styles.showPart2}>
          <div className={styles.divImg}>
            <img src={props.img2} alt="" />
          </div>
          <h4>{props.date2}</h4>
          <h5>{props.show2}</h5>
          <h6>{props.place2}</h6>
        </div>
        <div className={styles.showPart3}>
          <div className={styles.divImg}>
            <img src={props.img3} alt="" />
          </div>
          <h4>{props.date3}</h4>
          <h5>{props.show3}</h5>
          <h6>{props.place3}</h6>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
