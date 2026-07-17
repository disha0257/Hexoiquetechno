import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaHeadset,
  FaClock,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Modern Technology",
    description:
      "We build scalable, high-performance applications using the latest technologies and industry best practices.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Our experienced developers, designers, and consultants deliver innovative digital solutions tailored to your business.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Development",
    description:
      "Security is integrated into every stage of development, ensuring reliable and protected digital products.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description:
      "Efficient project planning and agile workflows help us deliver quality projects within deadlines.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you with maintenance and technical guidance.",
  },
  {
    icon: <FaAward />,
    title: "Quality Assurance",
    description:
      "Every project undergoes thorough testing and quality checks before deployment for the best user experience.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Content */}
        <motion.div
          className="why-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">WHY CHOOSE HEXONIQUE</span>

          <h2>
            Delivering Innovative
            <br />
            Digital Solutions
          </h2>

          <p>
            Hexonique empowers businesses with cutting-edge technology,
            modern design, and reliable software solutions. We focus on
            innovation, performance, and customer satisfaction to help your
            business grow in the digital world.
          </p>

          <div className="stats">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="why-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;