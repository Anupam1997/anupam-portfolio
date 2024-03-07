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
    <header className={styles.header}>
      <div className="flex align-middle justify-between 2xl:max-w-7xl xl:max-w-5xl lg:max-w-5xl md:max-w-5xl sm:max-w-5xl mx-auto">
        <nav
          className={styles.logoText}
          onClick={() => scrollToSection("heroSection")}
        >
          <span>&lt;</span>Anupam Singh<span> /&gt;</span>
        </nav>
        <div className={styles.headerLinks}>
          <nav
            className={styles.headerLink}
            onClick={() => scrollToSection("projects")}
          >
            <span>&lt;</span>Projects<span> /&gt;</span>
          </nav>
          <nav
            className={styles.headerLink}
            onClick={() => scrollToSection("skills")}
          >
            <span>&lt;</span>Skills<span> /&gt;</span>
          </nav>
          <nav
            className={styles.headerLink}
            onClick={() => scrollToSection("aboutme")}
          >
            <span>&lt;</span>About me<span> /&gt;</span>
          </nav>
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
    </header>
  );
}

export default Header;
