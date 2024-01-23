import React, { Dispatch, SetStateAction } from "react";
import { Close, FileDownloadOutlined } from "@mui/icons-material";
import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import styles from "./hero.module.scss";

export const PreviewResume = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
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

        <object
          data="./AnupamSinghResume.pdf"
          type="application/pdf"
          width="100%"
          height={"100%"}
        >
          <div className="flex flex-col gap-8 h-full flex-column justify-center items-center">
            <p className={styles.fallBackText}>
              This browser does not support PDFs
            </p>
            <Button
              className={styles.downloadBtnIn}
              size="large"
              variant="contained"
              startIcon={<FileDownloadOutlined />}
              href="./AnupamSinghResume.pdf"
              download={"AnupamSinghResume"}
            >
              Download Resume
            </Button>
          </div>
        </object>
      </SwipeableDrawer>
    </>
  );
};
