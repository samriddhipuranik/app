import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
