import React, { FC } from 'react';
import styles from './Header.module.css';

//Imagens
import logo from '../../assets/Logo.png'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <img src={logo} alt="imagemLogo" />
    <div className={styles.botoes}>
      <h4>Acessar conta</h4>
      <h4>Cadastre-se</h4>
    </div>
  </div>
);

export default Header;
