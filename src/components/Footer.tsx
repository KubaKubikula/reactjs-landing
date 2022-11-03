import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.bottomGooglePlayButton}>
        <h2>Let's start your adventure</h2>
        <img
          className={styles.buttonPlayStore}
          src="./images/google-play-badge.png"
        />
      </footer>
      <footer className={styles.mainFooter}>
        <Link style={{ color: "gray", textDecoration: "none" }} to="/terms">
          Terms&Conditions
        </Link>
        <p>© 2021–2022</p>
      </footer>
    </>
  );
};

export default Footer;
