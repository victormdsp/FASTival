import React, { FC } from "react";
import styles from "./Footer.module.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.footerDiv}>
    <div className={styles.textosDiv}>
      <a href="http://localhost:3000/">Sobre nós</a>
      <a href="http://localhost:3000/">Termos e condições de serviço</a>
    </div>
    <div className={styles.textos1Div}>
      <a href="http://localhost:3000/">Copyright © 2022</a>
      <a href="http://localhost:3000/">Gabriel Silva / Victor Martini</a>
    </div>
  </div>
);

export default Footer;
