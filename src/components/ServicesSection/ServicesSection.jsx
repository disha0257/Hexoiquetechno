import "./ServicesSection.module.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaArrowRight,
  FaPalette,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    description:
      "Scalable, secure and enterprise-grade software solutions tailored to automate business operations and accelerate growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    icon: <FaLaptopCode />,
    title: "Website Development",
    description:
      "Responsive, SEO-friendly websites built using modern technologies to deliver exceptional user experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "High-performance Android and iOS applications with beautiful UI and seamless functionality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&auto=format&fit=crop&q=80",
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Modern, intuitive and engaging interfaces designed to maximize customer satisfaction and conversions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Cloud migration, DevOps, infrastructure automation and scalable deployment services.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    icon: <FaRobot />,
    title: "AI & Automation",
    description:
      "AI-powered business automation, chatbots, intelligent workflows and data-driven solutions.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function ServicesSection() {
  return (
    <section className="services">
      <div className="services-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>OUR SERVICES</span>

          <h2>
            Innovative IT Solutions
            <br />
            Designed for Business Growth
          </h2>

          <p>
            At <strong>Hexonique Technologies</strong>, we deliver modern
            software solutions that help startups, SMEs and enterprises
            accelerate innovation through scalable technology.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <motion.div
                  className="icon"
                  whileHover={{
                    rotate: -10,
                    scale: 1.1,
                  }}
                >
                  {service.icon}
                </motion.div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link className="service-link" to="/services">
                  Learn More
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-footer"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Let's Build Your Next Digital Product</h3>

          <p>
            Helping startups and enterprises transform ideas into scalable,
            secure and future-ready digital solutions.
          </p>

          <Link className="services-btn" to="/contact">
            Get Free Consultation
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;