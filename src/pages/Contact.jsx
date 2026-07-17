import "../App.css";
import Header from "../components/Header/Header";

function Contact() {
  return (
    <div className="page-shell">
      <Header />

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
