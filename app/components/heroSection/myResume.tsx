"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DescriptionOutlined, VisibilityOutlined } from "@mui/icons-material";
import { PreviewResume } from "./previewResume";
import styles from "./hero.module.scss";

function MyResumeSection() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="flex gap-6 mt-6 ml-8">
        <Button
          className={styles.downloadBtn}
          size="large"
          variant="contained"
          onClick={() => scrollToSection("contact")}
          endIcon={
            <span
              role="img"
              style={{ fontSize: "24px", margin: "-9px 0px" }}
              aria-label="Waving Hand"
            >
              👋
            </span>
          }
        >
          Say Hi!
        </Button>
        <div className={styles.resumePreviewBtn}>
          <div className={styles.resumePreviewInner}>
            <Button
              className={styles.innerBtn}
              size="large"
              variant="outlined"
              startIcon={
                <DescriptionOutlined
                  style={{
                    fill: "var(--gradient-1)",
                  }}
                />
              }
              onClick={() => setOpen(true)}
            >
              View Resume
            </Button>
          </div>
        </div>
      </section>
      <PreviewResume open={open} setOpen={setOpen} />
    </>
  );
}

export default MyResumeSection;
