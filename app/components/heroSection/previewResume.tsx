"use client";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Close, FileDownloadOutlined } from "@mui/icons-material";
import { IconButton, SwipeableDrawer } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import useResizeObserver from "@/app/hooks/useResizeObserver";
import styles from "./hero.module.scss";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./preview.scss";

const resizeObserverOptions = {};

const maxWidth = 800;
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const PreviewResume = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);
  return (
    <>
      <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        sx={{
          ".MuiBackdrop-root": {
            background: "rgba(0,0,0,0.75)",
          },
          ".MuiPaper-root": {
            overflow: "initial",
            background: "var(--bg-color2)",
            height: "90%",
          },
        }}
        onClose={() => setOpen(false)}
        onOpen={() => console.log("Opened")}
      >
        <IconButton
          onClick={() => setOpen(false)}
          size="small"
          sx={{
            position: "absolute",
            top: -35,
            right: 30,
            zIndex: 3,
            color: "#fff",
          }}
        >
          <Close fontSize="small" />
        </IconButton>
        <section className="pdfWrapper">
          <IconButton
            className={styles.downloadBtnIn}
            size="large"
            href="./AnupamSinghResume.pdf"
            download={"AnupamSinghResume"}
          >
            <FileDownloadOutlined />
          </IconButton>
          <div className="Example">
            <div className="Example__container">
              <div
                className="Example__container__document"
                ref={setContainerRef}
              >
                <Document file={"./AnupamSinghResume.pdf"} options={options}>
                  <Page
                    pageNumber={1}
                    width={
                      containerWidth
                        ? Math.min(containerWidth, maxWidth)
                        : maxWidth
                    }
                  />
                </Document>
              </div>
            </div>
          </div>
        </section>
      </SwipeableDrawer>
    </>
  );
};
