"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkImg from "./heroImgDark.svg";
import LightImg from "./heroImgLight.svg";
import Image from "next/image";
import styles from "./hero.module.scss";

export const HeroImage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Image
      src={resolvedTheme === "dark" ? DarkImg : LightImg}
      width={300}
      className={styles.heroImage}
      height={300}
      alt="Picture of the author"
    />
  );
};
