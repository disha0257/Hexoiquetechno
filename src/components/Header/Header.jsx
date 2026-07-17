import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

function Header({ visible }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <NavLink to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
            <div className={styles.brandMark}>
              <img src={logo} alt="Hexonique logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Hexonique</span>
              <span className={styles.brandTag}>Technologies</span>
            </div>
          </NavLink>
        </div>

        <div className={styles.centerSection}>
          <motion.nav
            className={styles.pillNav}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <NavLink to="/" end className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
              Services
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
              Blog
            </NavLink>
          </motion.nav>
        </div>

        <div className={styles.rightSection}>
          <NavLink to="/contact" className={styles.ctaButton} onClick={() => setMenuOpen(false)}>
            Contact Us
          </NavLink>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`} />
          </button>
        </div>
      </div>

      <motion.div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
      >
        <NavLink to="/" end className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`} onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`} onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`} onClick={() => setMenuOpen(false)}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Contact Us
        </NavLink>
      </motion.div>

      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </motion.header>
  );
}

export default Header;
