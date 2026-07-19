import "./WhyChoose.css";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    id: "01",
    icon: <FaRocket />,
    title: "Modern Technology",
    description:
      "Future-ready web, mobile and cloud solutions using React, Node.js, AI and scalable architecture.",
  },

  {
    id: "02",
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Experienced developers, UI/UX designers and consultants delivering world-class digital experiences.",
  },

  {
    id: "03",
    icon: <FaShieldAlt />,
    title: "Secure Development",
    description:
      "Enterprise-grade security, clean architecture, best coding practices and protected infrastructure.",
  },

  {
    id: "04",
    icon: <FaClock />,
    title: "On-Time Delivery",
    description:
      "Agile project management with transparent communication and reliable delivery timelines.",
  },

  {
    id: "05",
    icon: <FaHeadset />,
    title: "24×7 Support",
    description:
      "Continuous monitoring, maintenance and technical support whenever your business needs it.",
  },

  {
    id: "06",
    icon: <FaAward />,
    title: "Quality Assurance",
    description:
      "Every product is thoroughly tested for performance, usability, accessibility and security.",
  },
];

const stats = [
  {
    number: "150+",
    label: "Projects Delivered",
  },

  {
    number: "98%",
    label: "Client Satisfaction",
  },

  {
    number: "5+",
    label: "Years Experience",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef(null);

  // ADD THIS LINE
  const navigate = useNavigate();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="why-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Mouse Glow */}

      <div
        className="mouse-glow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      {/* Background */}

      <div className="blur-circle blur1"></div>
      <div className="blur-circle blur2"></div>
      <div className="blur-circle blur3"></div>

      <div className="why-container">
        {/* ================= LEFT ================= */}

        <motion.div
          className="why-left"
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="section-badge">
            WHY CHOOSE HEXONIQUE
          </span>

          <h2>
            Building
            <span> Future-Ready </span>
            Digital Products
            For Modern Businesses.
          </h2>

          <p>
            We help startups and enterprises transform ideas into
            intelligent digital products through innovative
            software development, cloud technologies, UI/UX
            design and AI-powered solutions.
          </p>

          {/* Statistics */}

          <div className="stats-grid">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                className="stat-card"
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <h3>{item.number}</h3>

                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}

          <motion.button
  type="button"
  className="why-btn"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/contact")}
>
  Start Your Project
  <FaArrowRight />
</motion.button>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          className="why-right"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              className="feature-card"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
            >
              <div className="feature-header">
                <div className="feature-icon">
                  {item.icon}
                </div>

                <span className="feature-number">
                  {item.id}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}