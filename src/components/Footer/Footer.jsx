import { FiInstagram, FiLinkedin, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";
import ParticleBackground from "../ParticleBackground/ParticleBackground";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Animated Background */}
      <ParticleBackground />

      <div className={styles.container}>
        {/* Company */}
        <div className={styles.column}>
          <div className={styles.brandBlock}>
            <div className={styles.logoWrapper}>
              <img
                src={logo}
                alt="Hexonique Logo"
                className={styles.logo}
              />
            </div>

            <div>
              <h3 className={styles.companyName}>Hexonique</h3>

              <p>
                Empowering businesses with innovative software, web
                development, mobile applications, cloud solutions,
                and AI technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.column}>
          <h4>Navigations</h4>

          <nav className={styles.linkList}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h4>Contact</h4>

          <p>hexoniquetechno@gmail.com</p>
          <p>+91 95863 47364</p>

          <div className={styles.socialRow}>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FiMessageCircle />
            </a>

            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="https://linkedin.com/company/your-company"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;