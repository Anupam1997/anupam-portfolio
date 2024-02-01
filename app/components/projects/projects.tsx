import React from "react";
import styles from "./projects.module.scss";
import { ProjectSlide } from "./project-slide";
import Screen from "./screen";

export const Projects = () => {
  return (
    <div id="projects" className={`${styles.projects} max-w-5xl mx-auto`}>
      <h1 className={styles.heading}>
        <span>&lt;</span>Projects<span> /&gt;</span>
      </h1>
      <ProjectSlide />
    </div>
  );
};
