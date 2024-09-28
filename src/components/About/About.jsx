import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="About image" />
        <ul className={styles.aboutItems}>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui image" />
                <div className={styles.aboutItemText}>
                    {/* <h3>UI Designer</h3> */}
                    <p>Maintaining a strong academic record, consistently scoring above 9 CGPA, reflecting a deep understanding of core computer science subjects and programming principles.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server image" />
                <div className={styles.aboutItemText}>
                    {/* <h3>Backend Developer</h3> */}
                    <p>Participated in multiple college hackathons, demonstrating strong problem-solving skills and the ability to innovate under pressure.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor image" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
