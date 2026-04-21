import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>© 2026 CarePlus Hospital. All rights reserved.</p>
      </div>

      <div className={styles.center}>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </div>

      <div className={styles.right}>
        <p>Emergency: +91 8850755033</p>
      </div>
    </footer>
  );
};

export default Footer;
