"use client";

import React from "react";
import styles from "./header.module.scss";
import ThemeButton from "../ThemeButton/ThemeButton";
import Link from "next/link";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.header}>
      <div className=" flex align-middle justify-between max-w-5xl mx-auto">
        <div className={styles.logoText}>
          <span>&lt;</span>Anupam Singh<span> /&gt;</span>
        </div>
        <div className={styles.headerLinks}>
          <p
            className={styles.headerLink}
            onClick={() => scrollToSection("projects")}
          >
            <span>&lt;</span>Projects<span> /&gt;</span>
          </p>
          <p
            className={styles.headerLink}
            onClick={() => scrollToSection("contact")}
          >
            <span>&lt;</span>Technologies<span> /&gt;</span>
          </p>
          <p
            className={styles.headerLink}
            onClick={() => scrollToSection("aboutme")}
          >
            <span>&lt;</span>About me<span> /&gt;</span>
          </p>
        </div>
        <div>
          <Link
            target="blank"
            href={"https://www.linkedin.com/in/anupam-singh-7709b5148/"}
          >
            <LinkedIn
              fontSize="small"
              className={`${styles.socialIcons} mr-2`}
            />
          </Link>
          <Link target="blank" href={"https://github.com/Anupam1997"}>
            <GitHub fontSize="small" className={`${styles.socialIcons} mr-2`} />
          </Link>
          <Link
            target="blank"
            href={"https://www.instagram.com/anupam.singh97"}
          >
            <Instagram fontSize="small" className={styles.socialIcons} />
          </Link>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Header;
