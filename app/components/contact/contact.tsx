import React from "react";
import styles from "./contact.module.scss";
import { Divider, TextField } from "@mui/material";
import "./contact.scss";
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";

function Contact() {
  return (
    <section
      id="contact"
      className={`${styles.contact} 2xl:max-w-7xl xl:max-w-5xl lg:max-w-5xl md:max-w-5xl sm:max-w-5xl mx-auto`}
    >
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
            <div className="p-4">
              <Link
                className="flex mb-4"
                target="blank"
                href={"https://maps.app.goo.gl/nFe5BUhmMQXjRvby8"}
              >
                <LocationOn
                  fontSize="medium"
                  className={`${styles.socialIcons} mr-2`}
                />
                <p>Bengaluru, Karnatraka IN</p>
              </Link>

              <Link className="flex mb-4" href={"tel:+919754765125"}>
                <Phone
                  fontSize="medium"
                  className={`${styles.socialIcons} mr-2`}
                />
                <p>+91-97547 65125</p>
              </Link>

              <Link
                className="flex mb-4"
                target="blank"
                href={"mailto:anupamsingh215@gmail.com"}
              >
                <Email
                  fontSize="medium"
                  className={`${styles.socialIcons} mr-2`}
                />
                <p>anupamsingh215@gmail.com</p>
              </Link>

              <div className="flex">
                <Link
                  target="blank"
                  href={"https://www.linkedin.com/in/anupam-singh-7709b5148/"}
                >
                  <LinkedIn
                    fontSize="small"
                    className={`${styles.socialIcons} mr-3`}
                  />
                </Link>
                <Link target="blank" href={"https://github.com/Anupam1997"}>
                  <GitHub
                    fontSize="small"
                    className={`${styles.socialIcons} mr-3`}
                  />
                </Link>
                <Link
                  target="blank"
                  href={"https://www.instagram.com/anupam.singh97"}
                >
                  <Facebook
                    fontSize="small"
                    className={`${styles.socialIcons} mr-4`}
                  />
                </Link>
                <Link target="blank" href={"https://www.x.com/KyaSinghSahab"}>
                  <XIcon
                    fontSize="small"
                    className={`${styles.socialIcons} mr-4`}
                  />
                </Link>
                <Link
                  target="blank"
                  href={"https://www.instagram.com/anupam.singh97"}
                >
                  <Instagram
                    fontSize="small"
                    className={`${styles.socialIcons} mr-4`}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
