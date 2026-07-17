import "../App.css";

function Contact() {
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
            <span className="section-title">CONTACT US</span>
            <h1>Let’s build something transformative together.</h1>
            <p>Share your vision and we’ll help turn it into a scalable digital solution.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container contact-grid">
            <div className="info-card">
              <h3>Email</h3>
              <p>hello@hexoique.com</p>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
            <div className="info-card">
              <h3>Location</h3>
              <p>India • USA • Global Delivery</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
