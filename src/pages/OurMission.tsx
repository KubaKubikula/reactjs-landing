import React from "react";
import styles from "./OurMission.module.css";

const OurMission = () => {
  return (
    <article className={styles.article}>
      <div className={styles.contentArticleText}>
        <h1 className={styles.sectionHeadline}>
          We want Freedom Decentralization
        </h1>
        <p className={styles.sectionHeadlineP}>
          Our mission is to make free wiki like app (with premium features to
          buy posibility :-)) where you can meet cool people and find adventure
          on the way
        </p>
        <h1 className={styles.sectionHeadline}>We want Freedom Cryptography</h1>
        <p className={styles.sectionHeadlineP}>
          Content will be crypted so you wil be talking privately with your
          friends without backgroud listeres :-D
        </p>
        <h1 className={styles.sectionHeadline}>
          App to be useful not addictiful
        </h1>
        <p className={styles.sectionHeadlineP}>
          We want to create not to keep you on longest time but to push you to
          experience real adventure you will remember
        </p>
      </div>
      <div className={styles.contentArticleDiv}>
        <img src="./images/back4.jpeg" />
      </div>
    </article>
  );
};

export default OurMission;
