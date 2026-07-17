import "../App.css";

const services = [
  { title: "Software Development", description: "Custom applications for web, mobile, and enterprise operations." },
  { title: "Cloud & DevOps", description: "Infrastructure automation, migration, and continuous deployment." },
  { title: "AI & Automation", description: "Smart workflows and intelligent assistants for modern teams." },
  { title: "Cybersecurity", description: "Secure architecture, monitoring, and compliance-ready solutions." },
];

function Services() {
  return (
    <div className="page-shell">
      <header className="header">
        <div className="container navbar">
          <a href="/" className="logo-section">
            <span className="logo-text">Hexoique</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <a className="btn-primary" href="/contact">Let’s Talk</a>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="section-title">OUR SERVICES</span>
            <h1>Technology services crafted for growth, speed, and reliability.</h1>
            <p>We help startups and enterprises build products and platforms that scale smoothly.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container service-page-grid">
            {services.map((service) => (
              <div className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Services;
