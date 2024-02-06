import React from "react";
import styles from "./contact.module.scss";
import { Divider, TextField } from "@mui/material";
import "./contact.scss";

function Contact() {
  return (
    <div id="contact" className={`${styles.contact} max-w-5xl mx-auto`}>
      <h1 className={styles.heading}>
        <span>&lt;</span>Contact<span> /&gt;</span>
      </h1>

      <div className={styles.contactContainer}>
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
          <div className={`${styles.subContainer}` + " md:w-1/2 sm:w-full"}>
            <div className="mb-4">
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="standard"
                className="contact-textfield"
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                variant="standard"
                className="contact-textfield"
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                multiline
                minRows={4}
                id="standard-basic"
                label="Message"
                variant="standard"
                className="contact-textfield"
              />
            </div>
          </div>
          <Divider
            orientation="vertical"
            sx={{
              borderWidth: "1.2px",
              borderColor: "var(--muted-color)",
            }}
            flexItem
          />
          <div className={`${styles.subContainer}` + " md:w-1/2 sm:w-full"}>
            Links
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
