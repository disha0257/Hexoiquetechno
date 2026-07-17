import "./HeroSection.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Floating Circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="badge">
            🚀 Modern IT Solutions
          </span>

          <h1>
            Build Your
            <span> Digital Future </span>
            With Hexonique
          </h1>

          <p>
            We create world-class websites, enterprise software,
            mobile applications and digital experiences that help
            businesses grow faster.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Our Services
            </button>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-down">
        <span></span>
      </div>

    </section>
  );
}

export default HeroSection;