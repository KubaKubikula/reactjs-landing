import React from "react";
import styles from "./Header.module.css";
import { BsMinecartLoaded } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <button style={{ backgroundColor: "transparent", border: "none" }}>
        <BsMinecartLoaded style={{ color: "white", fontSize: 25 }} />
      </button>{" "}
      (0)
    </div>
  );
};

export default Header;
