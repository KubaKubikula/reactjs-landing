import React from "react";
import styles from "./Shop.module.css";
import Header from "../components/Shop/Header";
import Product from "../components/Shop/ProductList/Product";

const Shop = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Product />
      </div>
    </>
  );
};

export default Shop;
