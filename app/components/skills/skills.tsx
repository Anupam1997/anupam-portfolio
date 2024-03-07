"use client";
import React, { useState } from "react";
import styles from "./skills.module.scss";
import skills from "../../json/skills.json";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Switch } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: "var(--muted-color)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    background:
      "linear-gradient(270deg, var(--gradient-1) 30% , var(--gradient-2) 50%,var(--gradient-1) 100%)",
  },
}));
export const Skills = () => {
  const [ratingView, setRatingView] = useState(false);
  const [remount, setRemount] = useState<
    "query" | "determinate" | "indeterminate" | "buffer"
  >("buffer");

  return (
    <section
      id="skills"
      className={`${styles.skills} 2xl:max-w-7xl xl:max-w-5xl lg:max-w-5xl md:max-w-5xl sm:max-w-5xl mx-auto`}
    >
      <h1 className={styles.heading}>
        <span>&lt;</span>Skills<span> /&gt;</span>
      </h1>

      <Switch
        sx={{
          position: "absolute",
          right: "0px",
        }}
        onChange={(_, checked) => setRatingView(checked)}
      />
      {!ratingView ? (
        <div className="grid  items-center grid-cols-7 justify-center gap-8 ali">
          {skills.map((x, i) => {
            remount !== "buffer" ? setRemount("buffer") : "";
            return (
              <div
                key={i}
                className={
                  `lg:w-28 lg:h-28  md:w-24 md:h-24 sm:w-20 sm:h-20 rounded-full flex items-center justify-center` +
                  " " +
                  styles.outer
                }
              >
                <div
                  className={
                    `lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 rounded-full flex items-center justify-center` +
                    " " +
                    styles.inner
                  }
                >
                  <Image src={x.logo} alt={x.name} width={70} height={70} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid  items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center gap-8 ali">
          {skills.map((x, i) => {
            setTimeout(() => {
              setRemount("determinate");
            }, 200);
            return (
              <div key={i}>
                <span className={styles.skillLabel}>{x.name}</span>
                <BorderLinearProgress
                  variant={remount}
                  value={remount === "buffer" ? 0 : +x.rating * 10}
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
