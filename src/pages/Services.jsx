import "../App.css";
import Header from "../components/Header/Header";

const services = [
  { title: "Software Development", description: "Custom applications for web, mobile, and enterprise operations." },
  { title: "Cloud & DevOps", description: "Infrastructure automation, migration, and continuous deployment." },
  { title: "AI & Automation", description: "Smart workflows and intelligent assistants for modern teams." },
  { title: "Cybersecurity", description: "Secure architecture, monitoring, and compliance-ready solutions." },
];

function Services() {
  return (
    <div className="page-shell">
      <Header />

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
