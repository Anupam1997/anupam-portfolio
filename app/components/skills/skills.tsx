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
  height: 8,
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
    <div id="skills" className={`${styles.skills} max-w-5xl mx-auto`}>
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
                  `w-28 h-28  rounded-full flex items-center justify-center` +
                  " " +
                  styles.outer
                }
              >
                <div
                  className={
                    `w-28 h-28 rounded-full flex items-center justify-center` +
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
        <div className="grid  items-center grid-cols-3 justify-center gap-8 ali">
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
    </div>
  );
};
