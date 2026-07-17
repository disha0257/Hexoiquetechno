import { motion } from "framer-motion";
import { FiMonitor, FiSmartphone, FiLayers, FiCloud, FiActivity } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: FiMonitor,
    title: "Web Development",
    description: "Responsive business websites and web applications.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Android and iOS applications using Flutter and React Native.",
  },
  {
    icon: FiLayers,
    title: "UI/UX Design",
    description: "Modern and intuitive user interface design.",
  },
  {
    icon: FiActivity,
    title: "Custom Software Development",
    description: "Enterprise software tailored for business growth.",
  },
  {
    icon: FiCloud,
    title: "Cloud Solutions",
    description: "Cloud hosting, deployment and DevOps services.",
  },
  {
    icon: AiOutlineRobot,
    title: "AI Solutions",
    description: "Artificial Intelligence, Automation and Chatbots.",
  },
];

function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Our Services</span>
          <h2>Technology Solutions Built For Modern Businesses</h2>
        </div>

        <div className={styles.grid}>
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className={styles.card}
                key={item.title}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.iconWrapper}>
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
