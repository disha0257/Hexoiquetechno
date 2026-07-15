import "../App.css";

import logo from "../assets/logo.png";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <>
      {/* Navbar */}

      <header className="header">
        <div className="container navbar">

          <div className="logo-section">
            <img src={logo} alt="Hexonique" className="logo-img" />
          </div>

          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <button className="btn-primary">
            Let's Talk
          </button>

        </div>
      </header>

      {/* Hero */}

      <section className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <span className="hero-tag">
              INNOVATE • INTEGRATE • ELEVATE
            </span>

            <h1>
              Building Future-Ready
              <span> Digital Solutions</span>
            </h1>

            <p>
              We help startups, businesses and enterprises transform
              their ideas into powerful digital experiences.
            </p>

            <div className="hero-buttons">

              <button className="btn-primary">
                Get Free Consultation
              </button>

              <button className="btn-outline">
                View Our Work
              </button>

            </div>

          </div>

          <div className="hero-image">

            <img
              src={heroImage}
              alt="Hero"
            />

          </div>

        </div>

      </section>
      {/* ================= Services ================= */}

      <section className="services">

        <div className="container">

          <span className="section-title">
            WHAT WE DO
          </span>

          <h2>Our Services</h2>

          <div className="service-grid">

            <div className="service-card">
              <h3>Software Development</h3>
              <p>Custom enterprise software solutions.</p>
            </div>

            <div className="service-card">
              <h3>Web Development</h3>
              <p>Modern responsive React websites.</p>
            </div>

            <div className="service-card">
              <h3>Mobile Apps</h3>
              <p>Flutter Android & iOS applications.</p>
            </div>

            <div className="service-card">
              <h3>AI Solutions</h3>
              <p>Automation and AI integration.</p>
            </div>

            <div className="service-card">
              <h3>Cloud</h3>
              <p>Scalable cloud infrastructure.</p>
            </div>

            <div className="service-card">
              <h3>UI / UX</h3>
              <p>Beautiful digital experiences.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= Stats ================= */}

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <h2>50+</h2>
            <p>Projects Delivered</p>
          </div>

          <div>
            <h2>30+</h2>
            <p>Happy Clients</p>
          </div>

          <div>
            <h2>10+</h2>
            <p>Technologies</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="container cta-box">

          <div>

            <h2>
              Let's Build Something Amazing Together!
            </h2>

            <p>
              Have an idea? Let's turn it into reality.
            </p>

          </div>

          <button className="btn-primary">
            Get In Touch
          </button>

        </div>

      </section>

      {/* ================= Footer ================= */}

      <footer>

        <div className="container footer">

          <div>

            <img
              src={logo}
              alt=""
              className="footer-logo"
            />

            <p>
              Building Future Ready Digital Solutions.
            </p>

          </div>

          <div>

            <h4>Quick Links</h4>

            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>

          </div>

          <div>

            <h4>Contact</h4>

            <p>hello@hexonique.com</p>
            <p>+91 XXXXX XXXXX</p>

          </div>

        </div>

      </footer>

    </>
  );
}

