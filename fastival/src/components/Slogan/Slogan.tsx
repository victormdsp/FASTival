import React, { FC } from 'react';
import styles from './Slogan.module.css';

//Imagens
import sloganImage from '../../assets/Slogan-Image.png'

interface SloganProps { }

const Slogan: FC<SloganProps> = () => (
  <div className={styles.Slogan}>
    <h1>Transformando sua vida em um show!</h1>
    <div className={styles.sloganImage}>
      <img src={sloganImage} alt="Imagem do Slogan" />
    </div>
  </div>
);

export default Slogan;
