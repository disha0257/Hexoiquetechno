import "../App.css";

function About() {
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
            <span className="section-title">ABOUT HEXOIQUE</span>
            <h1>We build digital experiences that help businesses grow with confidence.</h1>
            <p>
              Hexoique is a modern IT service provider focused on digital transformation,
              software engineering, AI, cloud, and customer-first innovation.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="container card-grid">
            <div className="info-card">
              <h3>Our Mission</h3>
              <p>Deliver intelligent, scalable, and measurable technology solutions that make teams faster and businesses stronger.</p>
            </div>
            <div className="info-card">
              <h3>Our Vision</h3>
              <p>Create future-ready digital products that combine design, engineering, and strategy seamlessly.</p>
            </div>
            <div className="info-card">
              <h3>Why Clients Choose Us</h3>
              <p>Transparent collaboration, rapid execution, and long-term support from planning to launch and beyond.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
