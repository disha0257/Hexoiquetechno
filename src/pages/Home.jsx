import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import logo from "../assets/logo.png";

const services = [
  {
    title: "Web Development",
    description: "Responsive websites and web applications built for performance and conversion.",
  },
  {
    title: "App Development",
    description: "Cross-platform mobile apps that deliver native-level experiences.",
  },
  {
    title: "UI / UX Design",
    description: "Beautiful and intuitive design systems that keep users engaged.",
  },
  {
    title: "Full Stack",
    description: "End-to-end product delivery with modern front-end and back-end engineering.",
  },
];

function Home({ setHeroVisible }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01,
      }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [setHeroVisible]);

  return (
    <>
      <HeroSection ref={heroRef} />

      <section className="services-home" id="services">
        <div className="container section-header">
          <span className="section-title">Our Services</span>
          <h2>The services that make digital growth possible.</h2>
        </div>

        <div className="service-grid home-service-grid">
          {services.map((service) => (
            <Link to="/services" key={service.title} className="service-card service-link">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-promo">
        <div className="container promo-card">
          <div>
            <h2>Ready to build your next digital experience?</h2>
            <p>Reach out and let our team help you design, develop, and launch your next IT initiative.</p>
          </div>
          <Link to="/contact" className="btn-primary">Go to Contact Page</Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-badge">
              <img src={logo} alt="Hexoique" />
            </div>
            <div>
              <p className="footer-title">Hexoique</p>
              <p className="footer-copy">Modern IT services for websites, apps, and AI solutions.</p>
            </div>
          </div>

          <div className="footer-links">
            <p className="footer-heading">Quick Links</p>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-contact-block">
            <p className="footer-heading">Contact</p>
            <p>hello@hexoique.com</p>
            <p>+91 98765 43210</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

