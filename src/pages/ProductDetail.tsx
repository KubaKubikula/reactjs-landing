import React, { useState } from "react";
import Header from "../components/Shop/Header";
import styles from "./ProductDetail.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  count: number;
  size: string;
};

const ProductDetail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({
    defaultValues: {
      count: 1,
      size: "l",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const decrease = () => {
    const count = getValues("count");
    if (count > 1) {
      setValue("count", count - 1);
    }
  };

  const increase = () => {
    const count = getValues("count");
    setValue("count", count + 1);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="./images/hoodie.jpeg" />
        </div>
        <div className={styles.description}>
          <h2>Nice hoodie with camel logo</h2>
          <div>63 EUR</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            Size:
            <select {...register("size")}>
              <option value="l">L</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="xl">XL</option>
            </select>
            <div>
              Quantity: <button onClick={() => decrease()}>-</button>{" "}
              <input
                {...register("count", { required: true, min: 1, max: 10 })}
              />{" "}
              <button onClick={() => increase()}>+</button>
            </div>
            <input
              type="submit"
              className={styles.buttonAddToCart}
              value="Add to cart"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
