"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import styles from "./projects.module.scss";
import { Button } from "@mui/material";
import projects from "../../json/data.json";
import { Code, Preview } from "@mui/icons-material";
import Screen from "./screen";
import ImageS from "./image.svg";
import Image from "next/image";

export const ProjectSlide = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      preventClicks={false}
      speed={2000}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      className={styles.swiper}
    >
      {projects.map((project: any, i: number) => {
        return (
          <SwiperSlide className={styles.swiperSlide} key={i}>
            <div className={styles.projectTile}>
              <div className={styles.projectInfo}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDesc}>{project.description}</p>
                <p className={styles.tech}>
                  Tech:
                  <span> {project.tech.join(", ")}</span>
                </p>
                <div className="flex gap-4 mt-4">
                  <a target="blank" href={project.gitLink}>
                    <Button
                      className={styles.gitBtn}
                      size="small"
                      variant="contained"
                      startIcon={<Code />}
                    >
                      View Code
                    </Button>
                  </a>

                  {!!project.previewLink && (
                    <a
                      target="blank"
                      href={project.previewLink}
                      className={styles.resumePreviewBtn}
                    >
                      <div className={styles.resumePreviewInner}>
                        <Button
                          className={styles.innerBtn}
                          size="small"
                          variant="outlined"
                          startIcon={
                            <Preview
                              style={{
                                fill: "var(--gradient-1)",
                              }}
                            />
                          }
                        >
                          Live Preview
                        </Button>
                      </div>
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.projectImg}>
                <Image src={ImageS} alt="some" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
