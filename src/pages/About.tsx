import React, { useEffect } from "react";
import styles from "./About.module.css";
import "./Special.css";

const About = () => {
  const config = {
    root: null,
    rootMargin: "30px",
    threshold: 0.5,
  };

  useEffect(() => {
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add("appear");
        }
      });
    }, config);

    document.querySelectorAll(".headline").forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <main className={styles.mainContent}>
      <section className={styles.mainPart}>
        <h2 className={styles.sectionHeadline + " headline"}>Hhiker</h2>
        <p className={styles.sectionHeadlineP + " headline"}>
          The best travel app for your next adventure
        </p>
        <div className={styles.phoneAndButtons}>
          <img className={styles.buttonPhone} src="./images/phone.png" />
          <img
            className={styles.buttonPlayStore}
            src="./images/google-play-badge.png"
          />
        </div>
      </section>
      <article className={styles.contentArticle}>
        <div className={styles.contentArticleDiv}>
          <img src="./images/road.jpeg" />
        </div>
        <div className={styles.contentArticleText}>
          <h1 className={styles.sectionHeadline + " headline"}>
            Cool places nad campspots
          </h1>
          <p className={styles.sectionHeadlineP + " headline"}>
            Find and share campgrounds and cool places on the map
          </p>
          <img className={styles.buttonPhoneSmall} src="./images/phone.png" />
        </div>
      </article>
      <article className={styles.articleReverse}>
        <div className={styles.articleReverseText}>
          <h1 className={styles.sectionHeadline + " headline"}>
            Hitchhike car or find fellow hitchhiker
          </h1>
          <p className={styles.sectionHeadlineP + " headline"}>
            Broadcast your plans to go and find fellow driver or hitchhiker who
            is going same way
          </p>
          <img className={styles.buttonPhoneSmall} src="./images/phone.png" />
        </div>
      </article>
      <article className={styles.contentArticle}>
        <div className={styles.contentArticleDiv}>
          <img src="./images/back6.jpeg" />
        </div>
        <div className={styles.contentArticleText}>
          <h1 className={styles.sectionHeadline + " headline"}>Find friends</h1>
          <p className={styles.sectionHeadlineP + " headline"}>
            Connect and chat with friends and fellow travelers
          </p>
          <img className={styles.buttonPhoneSmall} src="./images/phone.png" />
        </div>
      </article>
    </main>
  );
};

export default About;
