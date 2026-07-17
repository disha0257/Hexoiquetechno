import "../App.css";

import logo from "../assets/logo.png";
import heroImage from "../assets/hero.png";

const services = [
  {
    title: "Software Engineering",
    description: "Custom enterprise applications, SaaS platforms, and product modernization.",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable architecture, automation, CI/CD, and secure cloud migrations.",
  },
  {
    title: "AI & Automation",
    description: "Intelligent workflows, conversational AI, and automation for growth.",
  },
  {
    title: "Web & Mobile",
    description: "Fast, responsive web and mobile experiences designed for engagement.",
  },
  {
    title: "Cybersecurity",
    description: "Risk assessment, compliance support, and resilient digital protection.",
  },
  {
    title: "Digital Transformation",
    description: "Strategy-led modernization that helps teams scale with confidence.",
  },
];

const stats = [
  { value: "50+", label: "Enterprise Projects" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Delivery Support" },
  { value: "10+", label: "Global Tech Stack" },
];

const steps = [
  { title: "Discover", text: "We learn your goals, users, technology gaps, and growth opportunities." },
  { title: "Design", text: "We shape elegant experiences, architecture, and implementation roadmaps." },
  { title: "Build", text: "Our teams deliver reliable products with quality engineering at every step." },
  { title: "Scale", text: "We support long-term growth with performance, automation, and innovation." },
];

const techStack = ["React", "Node.js", "Azure", "AWS", "AI/ML", "MongoDB", "Docker", "Figma"];

function Home() {
  return (
    <>
      <header className="header">
        <div className="container navbar">
          <a href="#home" className="logo-section">
            <img src={logo} alt="Hexoique" className="logo-img" />
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <a className="btn-primary" href="#contact">Let’s Talk</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="hero-tag">INNOVATE • SCALE • DELIVER</span>
              <h1>Future-ready digital solutions for ambitious brands.</h1>
              <p>
                Hexoique helps startups, enterprises, and growing companies build powerful software,
                AI systems, and cloud-native platforms with speed and precision.
              </p>

              <div className="hero-buttons">
                <a className="btn-primary" href="#contact">Get Free Consultation</a>
                <a className="btn-outline" href="#services">Explore Services</a>
              </div>

              <div className="hero-highlights">
                <span>⚡ Rapid delivery</span>
                <span>🛡️ Secure by design</span>
                <span>📈 Growth-focused</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>
              <div className="hero-card">
                <img src={heroImage} alt="Hexoique digital transformation" />
                <div className="hero-card-content">
                  <p className="hero-card-label">Trusted partner</p>
                  <h3>From idea to intelligent product.</h3>
                  <p>Strategy, design, engineering, and support in one seamless partnership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trusted-strip">
          <div className="container trusted-row">
            <span>Trusted by founders, startups, and enterprise teams</span>
            <div className="trusted-badges">
              <span>Cloud Native</span>
              <span>AI Powered</span>
              <span>Secure</span>
              <span>Global Delivery</span>
            </div>
          </div>
        </section>

        <section className="stats" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-title">WHY HEXOIQUE</span>
              <h2>We combine strategy, design, and engineering into one seamless execution engine.</h2>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-heading center">
              <span className="section-title">OUR SERVICES</span>
              <h2>Solutions built to transform how your business grows.</h2>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <div className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <div className="section-heading center">
              <span className="section-title">OUR PROCESS</span>
              <h2>A clear path from discovery to measurable impact.</h2>
            </div>

            <div className="process-grid">
              {steps.map((step, index) => (
                <div className="process-card" key={step.title}>
                  <span className="process-step">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-showcase">
          <div className="container">
            <div className="section-heading center">
              <span className="section-title">TECH STACK</span>
              <h2>Modern tools for modern business challenges.</h2>
            </div>

            <div className="tech-grid">
              {techStack.map((tech) => (
                <div className="tech-pill" key={tech}>{tech}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-box">
            <div>
              <span className="section-title left">LET’S BUILD TOGETHER</span>
              <h2>Ready to build something exceptional?</h2>
              <p>Bring your idea to life with a team that combines design, strategy, and engineering.</p>
            </div>
            <a className="btn-primary" href="mailto:hello@hexoique.com">Start Your Project</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer">
          <div>
            <img src={logo} alt="Hexoique" className="footer-logo" />
            <p>Building future-ready digital solutions with clarity, speed, and impact.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>hello@hexoique.com</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

