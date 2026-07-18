import "./WhyChoose.css";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Modern Technology",
    description:
      "Building future-ready applications with React, Node.js, AI, Cloud and modern development practices.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Experienced developers, designers and consultants delivering world-class digital products.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Development",
    description:
      "Security-first architecture with best coding practices, encryption and reliable infrastructure.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description:
      "Agile workflow, transparent communication and timely project delivery every time.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Support",
    description:
      "Continuous monitoring, maintenance and technical support whenever you need us.",
  },
  {
    icon: <FaAward />,
    title: "Quality Assurance",
    description:
      "Every project undergoes thorough testing for performance, security and user experience.",
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
    number: "24/7",
    label: "Technical Support",
  },
];

function WhyChoose() {
  const sectionRef = useRef(null);

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

    {/* Background Blur */}
    <div className="bg-circle bg1"></div>
    <div className="bg-circle bg2"></div>
    <div className="bg-circle bg3"></div>

    <div className="why-container">

      {/* ================= LEFT ================= */}

      <motion.div
        className="why-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">
          WHY CHOOSE HEXONIQUE
        </span>

        <h2>
          Building
          <span> Future-Ready </span>
          Digital Products
          For Modern Businesses.
        </h2>

        <p>
          We combine innovative technology, creative design and
          engineering excellence to build scalable software,
          websites, mobile applications and AI-powered solutions
          that accelerate business growth.
        </p>

        {/* Statistics */}

        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
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
          className="why-btn"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Start Your Project

          <FaArrowRight />
        </motion.button>

      </motion.div>

      {/* ================= RIGHT ================= */}

<motion.div
  className="why-right"
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  {features.map((item, index) => (
    <motion.div
      key={index}
      className={`feature-card card${index + 1}`}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        rotate: index % 2 === 0 ? -1 : 1,
      }}
      viewport={{ once: true }}
    >
      <div className="feature-top">

        <div className="feature-icon">
          {item.icon}
        </div>

        <span className="feature-number">
          0{index + 1}
        </span>

      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <div className="feature-line"></div>

      <div className="feature-footer">

        <span>Learn More</span>

        <FaArrowRight />

      </div>

    </motion.div>
  ))}

</motion.div>

    </div>
  </section>
);
}

export default WhyChoose;
