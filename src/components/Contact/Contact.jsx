import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vidhisinghvp1010@email.com">vidhisinghvp1010@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vidhi10101/">linkedin.com/vidhi10101/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Vidhi1010">github.com/Vidhi1010</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/figmacon.png")} alt="Figma icon" className={styles.figmaIcon} />
          <a href="https://www.figma.com/files/team/1388392373233225216/recents-and-sharing/recently-viewed?fuid=1388392369190771331">www.figma.com</a>
        </li>
      </ul>
    </footer>
  );
};
