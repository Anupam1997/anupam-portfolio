import React from "react";
import styles from "./hero.module.scss";
import { HeroImage } from "./HeroImage";

function HeroSection() {
  return (
    <div className={`${styles.heroSection} max-w-5xl mx-auto`}>
      <div>
        <h1 className={styles.heroText}>
          Hi, I&apos;m Anupam, <br /> a MERN Stack Developer
        </h1>
        <p>
          Coding in the shadows, debugging in the darkness. I am the MERN Stack
          developer your website deserves.
        </p>
      </div>
      <HeroImage />
    </div>
  );
}

export default HeroSection;
