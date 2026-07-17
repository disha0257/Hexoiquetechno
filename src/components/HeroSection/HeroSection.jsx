import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = forwardRef(function HeroSection(_, ref) {
  return (
    <section ref={ref} className="home-hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://cdn.coverr.co/videos/coverr-modern-office-space-4166/1080p.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="container hero-frame">
        <aside className="hero-contact-card">
          <span className="contact-label">Contact</span>
          <h3>Talk with our team</h3>
          <p>Book a consultation for web, mobile, or AI project planning.</p>
          <Link to="/contact" className="btn-outline hero-contact-action">
            Request a Call
          </Link>
        </aside>

        <div className="hero-copy">
          <span className="section-title">IT Services & Digital Growth</span>
          <h1>Build modern websites, scalable software, and AI-powered systems for faster business growth.</h1>
          <p>
            Hexoique delivers premium digital experiences with design-led product thinking, cloud-first engineering,
            and a focus on measurable outcomes.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/services" className="btn-outline">
              See Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
