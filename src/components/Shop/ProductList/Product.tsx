import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper} onClick={() => navigate("/product")}>
      <div>
        <img className={styles.image} src="./images/hoodie.jpeg" />
      </div>
      <h2>Nice hoodie with camel logo</h2>
      <div>63 EUR</div>
    </div>
  );
};

export default Product;
