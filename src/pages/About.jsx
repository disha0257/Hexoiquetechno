import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Palette,
  TrendingUp,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <main className="about">
      {/* Hero Section */}
      <section className="aboutHero">
        <div className="container">
          <span className="sectionTitle">ABOUT HEXONIQUE</span>

          <h1>
            Transforming Businesses Through
            <span> Innovative Digital Solutions</span>
          </h1>

          <p>
            At Hexonique Technologies, we design and develop modern websites,
            enterprise software, mobile applications, AI-powered solutions, and
            cloud platforms that help businesses innovate, scale, and succeed
            in today's digital world.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="container aboutCards">
        <div className="aboutCard">
          <Target size={40} />

          <h3>Mission</h3>

          <p>
            Deliver reliable and innovative technology solutions that create
            real business value.
          </p>
        </div>

        <div className="aboutCard">
          <Eye size={40} />

          <h3>Vision</h3>

          <p>
            Become a trusted global technology partner through innovation and
            excellence.
          </p>
        </div>

        <div className="aboutCard">
          <Heart size={40} />

          <h3>Values</h3>

          <p>
            Innovation, Integrity, Collaboration, Quality, and Customer
            Success.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="whySection">
        <div className="container whyGrid">
          <div>
            <span className="sectionTitle">WHY CHOOSE US</span>

            <h2>Why Businesses Choose Hexonique</h2>

            <ul>
              <li>
                <CheckCircle2 size={18} />
                Expert Development Team
              </li>

              <li>
                <CheckCircle2 size={18} />
                Modern Technologies
              </li>

              <li>
                <CheckCircle2 size={18} />
                Client-First Approach
              </li>

              <li>
                <CheckCircle2 size={18} />
                Agile Development
              </li>

              <li>
                <CheckCircle2 size={18} />
                Secure & Scalable Solutions
              </li>

              <li>
                <CheckCircle2 size={18} />
                Long-Term Support
              </li>
            </ul>
          </div>

          <div className="expertiseGrid">
            <div className="expertiseCard">
              <Globe size={30} />
              <h4>Web Development</h4>
            </div>

            <div className="expertiseCard">
              <Smartphone size={30} />
              <h4>Mobile Development</h4>
            </div>

            <div className="expertiseCard">
              <BrainCircuit size={30} />
              <h4>AI & Automation</h4>
            </div>

            <div className="expertiseCard">
              <Cloud size={30} />
              <h4>Cloud Solutions</h4>
            </div>

            <div className="expertiseCard">
              <Palette size={30} />
              <h4>UI / UX Design</h4>
            </div>

            <div className="expertiseCard">
              <TrendingUp size={30} />
              <h4>Digital Marketing</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="ctaSection">
        <div className="container">
          <h2>Ready To Build Your Next Digital Product?</h2>

          <p>
            Let's create innovative digital solutions together and accelerate
            your business growth.
          </p>

          <Link to="/contact" className="ctaButton">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;