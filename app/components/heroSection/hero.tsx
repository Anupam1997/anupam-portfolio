import React from "react";
import styles from "./hero.module.scss";
import { HeroImage } from "./HeroImage";
import MyResumeSection from "./myResume";

function HeroSection() {
  return (
    <div
      id="heroSection"
      className={`${styles.heroSection} flex lg:flex-row flex-col max-w-5xl mx-auto`}
    >
      <div>
        <h1 className={styles.heroText}>
          <p className={styles.heroMainText}>Hi, I&apos;m Anupam,</p>
          <p className={styles.heroSubText}>a MERN Stack Developer</p>
        </h1>
        <p className={styles.heroDesc}>
          Coding in the shadows, debugging in the darkness. I am the MERN Stack
          developer your website deserves.
        </p>
        <MyResumeSection />
      </div>
      <HeroImage />
    </div>
  );
}

export default HeroSection;
