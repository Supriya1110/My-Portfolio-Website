import React from 'react';
import { getImageUrl } from "../../utils"; 
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out! </p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon image" />
                <a href="mailto:supriyanovember10@gmail.com">supriyanovember10@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon image" />
                <a href="https://www.linkedin.com/in/supriya-singh-0a838b229">linkedin.com/supriya-singh</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon image" />
                <a href="https://github.com/Supriya1110/Supriya1110">github.com/Supriya1110</a>
            </li>
        </ul>

    </footer>
  )
}

export default Contact
