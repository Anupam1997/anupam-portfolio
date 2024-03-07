import React from "react";
import styles from "./projects.module.scss";
import { ProjectSlide } from "./project-slide";
import Screen from "./screen";

export const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.projects} 2xl:max-w-7xl xl:max-w-5xl lg:max-w-5xl md:max-w-5xl sm:max-w-5xl mx-auto`}
    >
      <h1 className={styles.heading}>
        <span>&lt;</span>Projects<span> /&gt;</span>
      </h1>
      <ProjectSlide />
    </section>
  );
};
