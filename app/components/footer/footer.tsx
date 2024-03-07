import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  const currDate = new Date();
  return (
    <footer className={styles.footer}>
      <p>
        Anupam Singh &copy; <time>{currDate.getFullYear()}</time> | All rights
        reserved
      </p>
      <p>Designed by Anupam Singh</p>
    </footer>
  );
}

export default Footer;
