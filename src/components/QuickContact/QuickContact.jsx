import "./QuickContact.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function QuickContact() {
  return (
    <section className="cta-section">

      <div className="gradient-circle circle-1"></div>
      <div className="gradient-circle circle-2"></div>
      <div className="gradient-circle circle-3"></div>

      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <span className="cta-badge">
          🚀 Let's Create Something Amazing
        </span>

        <h2>
          Have an Idea?
          <br />
          Let's Build It Together.
        </h2>

        <p>
          Whether you're launching a startup, growing your business,
          or modernizing your digital presence, Hexonique delivers
          innovative, scalable, and high-quality software solutions
          tailored to your goals.
        </p>

        <div className="cta-buttons">

          <Link to="/contact" className="primary-btn">
            Start Your Project
            <FaArrowRight />
          </Link>

          <Link to="/services" className="secondary-btn">
            <FaPhoneAlt />
            Explore Services
          </Link>

        </div>
      </motion.div>

    </section>
  );
}

export default QuickContact;