import React, { FC } from "react";
import styles from "./EventSwipper.module.css";

import imageColdplay from "../../assets/coldplay.png";

interface EventSwipperProps {}

const EventSwipper: FC<EventSwipperProps> = () => (
  <div className={styles.EventSwipper}>
    <h2>Próximos shows !</h2>
    <div className={styles.quadro}>
      <div className={styles.elementoEsquerda}>
        <h2>Show do Coldplay</h2>
        <h5>SAB, 24 de Dezembro</h5>
        <p>Allianz Parque - São Paulo, SP</p>
        <button>Saiba mais</button>
      </div>
      <div className={styles.elementoDireita}>
        <img src={imageColdplay} alt="coldplayImage" />
      </div>
    </div>
    <div className={styles.links}>
      <span className={styles.active}></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default EventSwipper;
