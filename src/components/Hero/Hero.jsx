import React, { useEffect, useRef } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typed from 'typed.js';

export const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Web Developer</i>', 'Problem Solver', '<i>Tech Enthusiast</i>' , 'Lifelong Learner'],
      typeSpeed: 70,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Supriya </h1>
        <p className={styles.description}>
          I'm a <span ref={el} /> </p> <br/>
        <p className={styles.description}>and I'm eager to learn and implement into the real world with my coding knowledge.</p>
        <a className={styles.contactBtn} href="mailto:supriyanovember@gmail.com">Contact Me</a>
      </div>
      <img className={styles.HeroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
