import "../App.css";
import Header from "../components/Header/Header";

function Blog() {
  return (
    <div className="page-shell">
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="section-title">Insights</span>
          <h1>Latest news, case studies, and technical perspectives from Hexoique.</h1>
          <p>
            Learn how we help organizations accelerate innovation with web, mobile, cloud, and AI solutions.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container card-grid">
          <article className="info-card">
            <h3>How modern websites increase trust and lead growth</h3>
            <p>
              Discover the role of modern user experience, performance, and conversion architecture in B2B success.
            </p>
          </article>
          <article className="info-card">
            <h3>Building scalable cloud applications for fast-growing teams</h3>
            <p>
              Learn the principles we use to design systems that scale reliably and stay easy to maintain.
            </p>
          </article>
          <article className="info-card">
            <h3>Why AI should be part of your next digital transformation</h3>
            <p>
              Explore how smart automation and data-driven experiences boost productivity and customer engagement.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Blog;
