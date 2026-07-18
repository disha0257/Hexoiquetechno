import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

import heroVideo from "../../assets/videos/hero-video.mp4";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className={styles.hero}>

      {/* Background Video */}
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Blur Overlay */}
      <div className={styles.videoBlur}></div>

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      <div className={styles.blobOne}></div>
      <div className={styles.blobTwo}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Your Existing Content */}
        </div>
      </div>

    </section>
  );
}

export default Hero;