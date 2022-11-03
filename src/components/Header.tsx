import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuRight, setMenuRight] = useState<number>(-270);
  const [bodyContentDisplay, setBodyContentDisplay] = useState<string>("none");

  const openMenu = () => {
    setMenuRight(0);
    setBodyContentDisplay("block");
  };

  const closeMenu = () => {
    setMenuRight(-270);
    setBodyContentDisplay("none");
  };

  return (
    <>
      <div
        id={styles.bodyContent}
        style={{ display: bodyContentDisplay }}
        onClick={closeMenu}
      ></div>
      <header className={styles.mainHeader}>
        <h1 className={styles.sectionHeadlineLogo}>
          <Link to="/">Hhiker</Link>
        </h1>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNav__items}>
            <li className={styles.mainNav__item}>
              <Link to="/">About</Link>
            </li>
            <li className={styles.mainNav__item}>
              <Link to="/ourmission">Our mission</Link>
            </li>
            <li className={styles.mainNav__item}>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <button onClick={openMenu} className={styles.buttonMenu}>
          Menu
        </button>
      </header>
      <nav id={styles.mainNavPopup} style={{ right: menuRight }}>
        <div className={styles.closePopupWrapper}>
          <button id={styles.closePopupMenu} onClick={closeMenu}>
            X
          </button>
        </div>
        <ul className={styles.mainNavPopup__items}>
          <li className={styles.mainNavPopup__item}>
            <Link to="/" onClick={() => closeMenu()}>
              About
            </Link>
          </li>
          <li className={styles.mainNavPopup__item}>
            <Link to="/ourmission" onClick={() => closeMenu()}>
              Our mission
            </Link>
          </li>
          <li className={styles.mainNavPopup__item}>
            <Link to="/shop" onClick={() => closeMenu()}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
