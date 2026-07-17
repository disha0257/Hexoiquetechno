import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import styles from "./ContactCTA.module.css";

function ContactCTA() {
  return (
    <section className={styles.ctaSection} id="contact-cta">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Ready to Transform Your Business?</span>
          <h2>Let's build innovative digital solutions together.</h2>
          <p>
            Partner with Hexonique to create scalable software, intelligent applications, and exceptional digital
            experiences that drive real business growth.
          </p>
        </div>
        <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 140 }}>
          <Link to="/contact" className={styles.actionButton}>
            Contact Us <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;
