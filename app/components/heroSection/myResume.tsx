"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FileDownloadOutlined, VisibilityOutlined } from "@mui/icons-material";
import styles from "./hero.module.scss";
import { PreviewResume } from "./previewResume";

function MyResumeSection() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="flex gap-6 mt-6 ml-8">
        <Button
          className={styles.downloadBtn}
          size="large"
          variant="contained"
          startIcon={<FileDownloadOutlined />}
          href="./AnupamSinghResume.pdf"
          download={"AnupamSinghResume"}
        >
          Resume
        </Button>
        <div className={styles.resumePreviewBtn}>
          <div className={styles.resumePreviewInner}>
            <Button
              className={styles.innerBtn}
              size="large"
              variant="outlined"
              startIcon={
                <VisibilityOutlined
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
      </div>
      <PreviewResume open={open} setOpen={setOpen} />
    </>
  );
}

export default MyResumeSection;
