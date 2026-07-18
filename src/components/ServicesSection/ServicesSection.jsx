import styles from "./ServicesSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaRobot,
  FaArrowRight,
  FaDocker,
  FaAws,
  FaGithub,
  FaNodeJs,
  FaBrain,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiFirebase,
  SiReact,
  SiFlutter,
} from "react-icons/si";

const services = [
  {
    number: "01",
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    description:
      "Enterprise software solutions designed to automate workflows, improve efficiency and accelerate business growth.",
    link: "software",
    tech: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiReact />, label: "React" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiKubernetes />, label: "Kubernetes" },
    ],
  },

  {
    number: "02",
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Modern responsive websites built with powerful technology, optimized performance and SEO-friendly architecture.",
    link: "web-development",
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <FaAws />, label: "AWS" },
    ],
  },

  {
    number: "03",
    icon: <FaMobileAlt />,
    title: "Mobile Application Development",
    description:
      "Cross-platform Android & iOS apps with seamless performance.",
    link: "mobile-development",
    tech: [
      { icon: <SiFlutter />, label: "Flutter" },
      { icon: <SiFirebase />, label: "Firebase" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <FaDocker />, label: "Docker" },
    ],
  },

  {
    number: "04",
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Creative interfaces focused on usability, accessibility and engagement.",
    link: "ui-ux",
    tech: [
      { icon: <SiReact />, label: "Figma" },
      { icon: <FaGithub />, label: "Prototype" },
      { icon: <FaNodeJs />, label: "Design System" },
    ],
  },

  {
    number: "05",
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Secure cloud infrastructure, scalable deployments and DevOps automation.",
    link: "cloud",
    tech: [
      { icon: <FaAws />, label: "AWS" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiTerraform />, label: "Terraform" },
      { icon: <SiKubernetes />, label: "Kubernetes" },
    ],
  },

  {
  number: "06",
  icon: <FaRobot />,
  title: "AI & Automation",
  description:
    "Generative AI, automation and intelligent business solutions.",
  link: "ai",
  tech: [
    { icon: <FaBrain />, label: "OpenAI" },
    { icon: <FaNodeJs />, label: "Python" },
    { icon: <FaGithub />, label: "API" },
    { icon: <FaDocker />, label: "Docker" },
  ],
},
];

function ServicesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const service = services[active];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* LEFT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={service.number}
              className={styles.left}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.smallTitle}>OUR SERVICES</span>

              <h2>
                Technology Solutions
                <br />
                <span>Built For Future Businesses.</span>
              </h2>

              {/* Service Header */}

<div className={styles.serviceHeader}>

  {/* Service Number */}

  <div className={styles.serviceNumber}>
    {service.number}
  </div>

  {/* Icon + Title */}

  <div className={styles.titleRow}>

    <div className={styles.serviceIcon}>
      {service.icon}
    </div>

    <h3>{service.title}</h3>

  </div>

</div>

{/* Description */}

<p>{service.description}</p>
              <Link
                to={`/services/${service.link}`}
                className={styles.button}
              >
                Explore Service
                <FaArrowRight />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT */}

          <div className={styles.right}>
            <div className={styles.orb}></div>

            {service.tech.map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.tech} ${styles["t" + index]}`}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + index,
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}

        <div className={styles.navigation}>
          {services.map((item, index) => (
            <button
              key={item.number}
              onClick={() => setActive(index)}
              className={
                active === index
                  ? styles.activeButton
                  : styles.navButton
              }
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;