import React from "react";
import styles from "./aboutme.module.scss";

function AboutMe() {
  return (
    <section
      id="aboutme"
      className={`${styles.aboutMe} 2xl:max-w-7xl xl:max-w-5xl lg:max-w-5xl md:max-w-5xl sm:max-w-5xl mx-auto`}
    >
      AboutMe
    </section>
  );
}

export default AboutMe;
