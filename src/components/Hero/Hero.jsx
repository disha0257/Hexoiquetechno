import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline preload="metadata">
        <source src="https://cdn.coverr.co/videos/coverr-business-technology-1070/1080p.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.blobOne} />
      <div className={styles.blobTwo} />

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.span
            className={styles.label}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            IT SERVICES & DIGITAL TRANSFORMATION
          </motion.span>
          <motion.h1
            className={styles.title}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Empowering Businesses with Innovative Digital Solutions
          </motion.h1>
          <motion.p
            className={styles.description}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            At Hexonique, we build modern websites, scalable software, mobile applications, and AI-powered
            solutions that help businesses grow, innovate, and succeed in the digital world.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <Link className={styles.primaryButton} to="/about">
              Learn More
            </Link>
            <Link className={styles.secondaryButton} to="/services">
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.mouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
