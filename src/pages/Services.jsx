import "../App.css";
import "./Services.css";

import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Database,
  ShieldCheck,
  ShoppingCart,
  Palette,
  Network,
  Settings,
  BarChart3
} from "lucide-react";

const services = [
  {
    icon: <Code2 />,
    title: "Custom Software Development",
    description:
      "Business software designed specifically for your company's workflow, helping you automate operations and improve productivity.",
    link: "/services/software-development"
  },

  {
    icon: <Globe />,
    title: "Website Development",
    description:
      "Professional websites that increase credibility, generate leads and help your business grow online.",
    link: "/services/web-development"
  },

  {
    icon: <Smartphone />,
    title: "Mobile App Development",
    description:
      "Android and iOS applications that deliver seamless digital experiences for your customers.",
    link: "/services/mobile-development"
  },

  {
    icon: <BrainCircuit />,
    title: "Artificial Intelligence",
    description:
      "AI-powered solutions that automate repetitive tasks and improve business decision making.",
    link: "/services/artificial-intelligence"
  },

  {
    icon: <Cloud />,
    title: "Cloud & DevOps",
    description:
      "Secure cloud infrastructure, deployment automation and scalable hosting solutions.",
    link: "/services/cloud-devops"
  },

  {
    icon: <ShieldCheck />,
    title: "Cyber Security",
    description:
      "Protect your business, applications and customer data with enterprise-grade security.",
    link: "/services/cyber-security"
  },

  {
    icon: <ShoppingCart />,
    title: "E-Commerce Development",
    description:
      "Modern online stores that increase sales and provide an outstanding shopping experience.",
    link: "/services/ecommerce-development"
  },

  {
    icon: <Palette />,
    title: "UI / UX Design",
    description:
      "Beautiful and intuitive user interfaces that keep customers engaged.",
    link: "/services/ui-ux-design"
  },

  {
    icon: <Database />,
    title: "Database Solutions",
    description:
      "Reliable database architecture for storing, managing and securing business information.",
    link: "/services/database-solutions"
  },

  {
    icon: <Network />,
    title: "API Development",
    description:
      "Connect your applications, payment gateways and third-party services securely.",
    link: "/services/api-development"
  },

  {
    icon: <Settings />,
    title: "ERP & CRM Solutions",
    description:
      "Manage customers, employees and business operations from a single platform.",
    link: "/services/erp-crm"
  },

  {
    icon: <BarChart3 />,
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates and technical support to keep your business running smoothly.",
    link: "/services/support-maintenance"
  }
];

function Services() {
  return (
    <div className="services-page">
      <Header />

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>
        <div className="hero-circle circle3"></div>

        <div className="container hero-grid">

          <div className="hero-content">

            <span className="hero-badge">
              ENTERPRISE DIGITAL SERVICES
            </span>

            <h1>
              Technology Solutions
              <span>Built for Business Growth</span>
            </h1>

            <p>
              Hexonique Technologies helps startups, SMEs and enterprises
              transform ideas into scalable digital products through
              software development, AI, cloud solutions, mobile applications
              and business automation.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="primary-btn"
              >
                Start Your Project
                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/about"
                className="secondary-btn"
              >
                Why Hexonique
              </Link>

            </div>

          </div>

          <div className="hero-card">

            <div className="hero-stat">

              <h2>12+</h2>

              <p>
                Technology Services
              </p>

            </div>

            <div className="hero-stat">

              <h2>100%</h2>

              <p>
                Client Focused
              </p>

            </div>

            <div className="hero-stat">

              <h2>24×7</h2>

              <p>
                Technical Support
              </p>

            </div>

            <div className="hero-stat">

              <h2>Agile</h2>

              <p>
                Development Process
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TRUST ================= */}

      <section className="trust-section">

        <div className="container">

          <span className="section-tag">
            TRUSTED PARTNER
          </span>

          <h2>
            Technology Solutions for Every Business
          </h2>

          <p>
            Whether you're launching a startup, growing an existing company
            or modernizing enterprise systems, our team delivers reliable,
            scalable and future-ready software solutions.
          </p>

          <div className="trust-grid">

            <div>
              <h3>Startups</h3>
              <p>Launch your idea faster with modern technology.</p>
            </div>

            <div>
              <h3>Small Businesses</h3>
              <p>Digitize operations and improve productivity.</p>
            </div>

            <div>
              <h3>Enterprises</h3>
              <p>Scale securely with enterprise-grade architecture.</p>
            </div>

            <div>
              <h3>Global Teams</h3>
              <p>Cloud-first solutions built for worldwide collaboration.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section">

        <div className="container">

          <div className="section-heading">

            <span>
              OUR SERVICES
            </span>

            <h2>
              Complete Digital Transformation Services
            </h2>

            <p>
              We provide end-to-end technology solutions that help businesses
              improve efficiency, reduce costs and accelerate growth.
            </p>

          </div>

          <div className="service-grid">

            {services.map((service,index)=>(

              <div
                key={index}
                className="service-card"
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <ul>

                  <li>
                    <CheckCircle2 size={18}/>
                    Business Focused
                  </li>

                  <li>
                    <CheckCircle2 size={18}/>
                    Scalable Architecture
                  </li>

                  <li>
                    <CheckCircle2 size={18}/>
                    Long-Term Support
                  </li>

                </ul>

                <Link
                  to={service.link}
                  className="learn-more"
                >
                  Learn More
                  <ArrowRight size={18}/>
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ==========================================
    INDUSTRIES WE SERVE
========================================== */}

<section className="industries-section">

<div className="container">

<div className="section-heading">

<span>INDUSTRIES WE SERVE</span>

<h2>
Solutions Designed For Every Industry
</h2>

<p>
Every industry has different challenges. We create digital
solutions that improve productivity, customer experience and
business growth.
</p>

</div>

<div className="industry-grid">

<div className="industry-card">
<h3>Healthcare</h3>
<p>
Hospital management systems, patient portals,
telemedicine and healthcare automation.
</p>
</div>

<div className="industry-card">
<h3>Education</h3>
<p>
Learning management systems, student portals,
online examination platforms.
</p>
</div>

<div className="industry-card">
<h3>Finance</h3>
<p>
Secure banking software, fintech applications
and digital payment solutions.
</p>
</div>

<div className="industry-card">
<h3>Retail & Ecommerce</h3>
<p>
Online stores, inventory management,
customer engagement platforms.
</p>
</div>

<div className="industry-card">
<h3>Manufacturing</h3>
<p>
Production automation, ERP systems,
inventory and supply chain management.
</p>
</div>

<div className="industry-card">
<h3>Real Estate</h3>
<p>
Property management, CRM,
lead generation and booking systems.
</p>
</div>

</div>

</div>

</section>



{/* ==========================================
WHY CHOOSE US
========================================== */}

<section className="why-section">

<div className="container">

<div className="section-heading">

<span>WHY HEXONIQUE</span>

<h2>
Why Businesses Choose Us
</h2>

<p>
We don't just develop software.
We solve business problems through technology.
</p>

</div>

<div className="why-grid">

<div className="why-card">

<h3>Business First</h3>

<p>
Every solution is built around your business goals,
not just technology.
</p>

</div>

<div className="why-card">

<h3>Modern Technologies</h3>

<p>
React, Node.js, Flutter, AI, Cloud and enterprise
frameworks.
</p>

</div>

<div className="why-card">

<h3>Scalable Architecture</h3>

<p>
Applications designed for future growth,
high performance and security.
</p>

</div>

<div className="why-card">

<h3>Transparent Process</h3>

<p>
Regular updates, milestone tracking
and clear communication.
</p>

</div>

<div className="why-card">

<h3>Dedicated Support</h3>

<p>
Our experts stay with you after launch,
ensuring long-term success.
</p>

</div>

<div className="why-card">

<h3>Quality Assurance</h3>

<p>
Extensive testing guarantees reliable,
secure and bug-free software.
</p>

</div>

</div>

</div>

</section>



{/* ==========================================
BUSINESS BENEFITS
========================================== */}

<section className="benefits-section">

<div className="container">

<div className="section-heading">

<span>BUSINESS BENEFITS</span>

<h2>
How Technology Helps Your Business
</h2>

<p>
Our digital solutions are designed to generate
real business value—not just software.
</p>

</div>

<div className="benefit-grid">

<div className="benefit-card">

<h3>Increase Productivity</h3>

<p>
Automate repetitive work and save valuable time.
</p>

</div>

<div className="benefit-card">

<h3>Reduce Costs</h3>

<p>
Minimize manual processes and operational expenses.
</p>

</div>

<div className="benefit-card">

<h3>Improve Customer Experience</h3>

<p>
Provide faster services with modern digital platforms.
</p>

</div>

<div className="benefit-card">

<h3>Better Decision Making</h3>

<p>
Real-time dashboards and business analytics.
</p>

</div>

<div className="benefit-card">

<h3>Business Growth</h3>

<p>
Expand your reach with scalable digital solutions.
</p>

</div>

<div className="benefit-card">

<h3>Enterprise Security</h3>

<p>
Protect business data using industry best practices.
</p>

</div>

</div>

</div>

</section>



{/* ==========================================
COMPANY STATS
========================================== */}

<section className="stats-section">

<div className="container">

<div className="stats-grid">

<div className="stat-box">

<h2>12+</h2>

<p>
Professional Services
</p>

</div>

<div className="stat-box">

<h2>50+</h2>

<p>
Business Solutions
</p>

</div>

<div className="stat-box">

<h2>24×7</h2>

<p>
Technical Support
</p>

</div>

<div className="stat-box">

<h2>100%</h2>

<p>
Customer Focused
</p>

</div>

</div>

</div>

</section>



{/* ==========================================
OUR PROCESS
========================================== */}

<section className="process-section">

<div className="container">

<div className="section-heading">

<span>OUR PROCESS</span>

<h2>
How We Deliver Successful Projects
</h2>

<p>
A transparent and structured development process
that ensures quality and timely delivery.
</p>

</div>

<div className="timeline">

<div className="step">
<span>01</span>
<h3>Discovery</h3>
<p>Understanding your business and requirements.</p>
</div>

<div className="step">
<span>02</span>
<h3>Planning</h3>
<p>Creating project roadmap and technical architecture.</p>
</div>

<div className="step">
<span>03</span>
<h3>Design</h3>
<p>Modern UI/UX focused on user experience.</p>
</div>

<div className="step">
<span>04</span>
<h3>Development</h3>
<p>Building secure, scalable and high-quality software.</p>
</div>

<div className="step">
<span>05</span>
<h3>Testing</h3>
<p>Quality assurance before deployment.</p>
</div>

<div className="step">
<span>06</span>
<h3>Launch & Support</h3>
<p>Deployment, maintenance and continuous improvements.</p>
</div>

</div>

</div>

</section>




{/* ==========================================
ENGAGEMENT MODELS
========================================== */}

<section className="engagement-section">

<div className="container">

<div className="section-heading">

<span>ENGAGEMENT MODELS</span>

<h2>
Choose The Right Hiring Model
</h2>

<p>
Flexible collaboration models designed for startups,
SMEs and enterprise organizations.
</p>

</div>

<div className="engagement-grid">

<div className="engagement-card">

<h3>Dedicated Team</h3>

<p>
A full-time development team working exclusively
on your project.
</p>

</div>

<div className="engagement-card">

<h3>Fixed Price Project</h3>

<p>
Ideal for projects with well-defined scope,
budget and timeline.
</p>

</div>

<div className="engagement-card">

<h3>Time & Material</h3>

<p>
Flexible engagement for evolving business
requirements.
</p>

</div>

</div>

</div>

</section>



{/* ==========================================
FAQ
========================================== */}

<section className="faq-section">

<div className="container">

<div className="section-heading">

<span>FREQUENTLY ASKED QUESTIONS</span>

<h2>
Common Questions
</h2>

</div>

<div className="faq-list">

<div className="faq-item">

<h3>
How long does software development take?
</h3>

<p>
Most projects take between 4 and 16 weeks depending
on complexity and features.
</p>

</div>

<div className="faq-item">

<h3>
Can you improve our existing software?
</h3>

<p>
Yes. We modernize legacy systems, improve
performance and add new features.
</p>

</div>

<div className="faq-item">

<h3>
Do you provide maintenance?
</h3>

<p>
Yes. We offer continuous support, monitoring,
updates and security improvements.
</p>

</div>

<div className="faq-item">

<h3>
Can startups work with Hexonique?
</h3>

<p>
Absolutely. We help startups build MVPs,
scale products and grow rapidly.
</p>

</div>

</div>

</div>

</section>



{/* ==========================================
PREMIUM CTA
========================================== */}

<section className="service-cta">

<div className="container">

<div className="cta-box">

<div className="cta-content">

<span className="cta-tag">

LET'S BUILD TOGETHER

</span>

<h2>

Ready To Transform
Your Business?

</h2>

<p>

Whether you need a website, mobile app,
enterprise software or AI-powered solution,
our experts are ready to help.

</p>

<div className="cta-buttons">

<Link
to="/contact"
className="primary-btn"
>

Start Your Project

<ArrowRight size={18}/>

</Link>

<Link
to="/about"
className="secondary-btn"
>

Know More

</Link>

</div>

</div>

<div className="cta-stats">

<div>

<h3>12+</h3>

<p>Technology Services</p>

</div>

<div>

<h3>24×7</h3>

<p>Support</p>

</div>

<div>

<h3>100%</h3>

<p>Business Focused</p>

</div>

</div>

</div>

</div>

</section>

      <Footer />

    </div>
  );
}

export default Services;