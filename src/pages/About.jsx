import { Link } from "react-router-dom";

import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Search,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Lightbulb,
  Award,
  Handshake,
  TrendingUp,
  Globe,
  Smartphone,
  Cloud,
  BrainCircuit,
  Database,
  Building2,
} from "lucide-react";

import "./About.css";
import Footer from "../components/Footer/Footer";

function About() {

  /* ==============================
      DEVELOPMENT PROCESS
  ============================== */

  const process = [
    {
      icon: <Search size={34} />,
      title: "Discovery & Research",
      text:
        "We understand your business, users, goals, and challenges before starting development.",
    },
    {
      icon: <PenTool size={34} />,
      title: "UI / UX Design",
      text:
        "Creating intuitive user experiences with modern and engaging interfaces.",
    },
    {
      icon: <Code2 size={34} />,
      title: "Development",
      text:
        "Building scalable, secure, and high-performance software using modern technologies.",
    },
    {
      icon: <Rocket size={34} />,
      title: "Deployment & Support",
      text:
        "Launching your solution and providing continuous improvements and maintenance.",
    },
  ];

  /* ==============================
      WHY CHOOSE
  ============================== */

  const whyChoose = [
    "Experienced Software Engineers",
    "Modern Technology Stack",
    "Transparent Communication",
    "Agile Development Process",
    "Scalable Cloud Architecture",
    "Security First Development",
    "Long-Term Technical Support",
    "Business-Focused Solutions",
  ];

  /* ==============================
      VALUES
  ============================== */

  const values = [
    {
      icon: <Lightbulb />,
      title: "Innovation",
      text:
        "We embrace creativity and emerging technologies to solve complex business challenges.",
    },
    {
      icon: <ShieldCheck />,
      title: "Integrity",
      text:
        "Honesty, transparency, and trust are the foundation of every client relationship.",
    },
    {
      icon: <Award />,
      title: "Quality",
      text:
        "Every product is engineered with precision, performance, and long-term reliability.",
    },
    {
      icon: <Handshake />,
      title: "Partnership",
      text:
        "We work as an extension of your team to achieve long-term business success.",
    },
  ];

  return (
    <main className="about">

      {/* ===================================
              HERO SECTION
      =================================== */}

      <section className="aboutHero">

        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>

        <div className="container heroContent">

          <span className="sectionTitle">
            ABOUT HEXONIQUE
          </span>

          <h1>
            Building Intelligent Software
            <span> That Powers Modern Businesses.</span>
          </h1>

          <p>
            Hexonique Technologies is a modern software development company
            helping startups, SMEs, and enterprises transform ideas into
            scalable digital products. We specialize in custom software,
            enterprise applications, SaaS platforms, AI-powered solutions,
            cloud technologies, and digital transformation services that
            accelerate business growth.
          </p>

          <div className="heroButtons">

            <Link
              to="/contact"
              className="primaryBtn"
            >
              Start Your Project
            </Link>

            <Link
              to="/services"
              className="secondaryBtn"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>

      {/* ===================================
              COMPANY STORY
      =================================== */}

      <section className="storySection">

        <div className="container storyGrid">

          <div className="storyContent">

            <span className="sectionTitle">
              WHO WE ARE
            </span>

            <h2>
              Your Trusted Technology Partner
              for Digital Transformation
            </h2>

            <p>
              Every successful business starts with an idea. At Hexonique
              Technologies, we transform those ideas into powerful digital
              products that help organizations innovate, automate processes,
              improve customer experiences, and achieve sustainable growth.
            </p>

            <p>
              From startups building their first MVP to enterprises
              modernizing legacy systems, we deliver reliable, scalable,
              and secure software solutions tailored to unique business
              requirements.
            </p>

            <p>
              Our multidisciplinary team combines strategy, design,
              engineering, cloud technologies, and AI to create digital
              products that are future-ready and built for long-term success.
            </p>

          </div>

          <div className="storyCards">

            <div className="storyCard">

              <TrendingUp size={40} />

              <h3>Business Growth</h3>

              <p>
                Building technology solutions that improve productivity,
                efficiency, and revenue.
              </p>

            </div>

            <div className="storyCard">

              <ShieldCheck size={40} />

              <h3>Reliable Engineering</h3>

              <p>
                Secure, scalable, and high-performance applications built
                using modern development standards.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================
          MISSION • VISION • VALUES
      =================================== */}

      <section className="container aboutCards">

        <div className="aboutCard">

          <Target size={40} />

          <h3>Our Mission</h3>

          <p>
            Deliver innovative, secure, and scalable software solutions
            that solve real-world business problems and create measurable
            value for our clients.
          </p>

        </div>

        <div className="aboutCard">

          <Eye size={40} />

          <h3>Our Vision</h3>

          <p>
            Become a globally trusted technology partner recognized for
            engineering excellence, innovation, and customer success.
          </p>

        </div>

        <div className="aboutCard">

          <Heart size={40} />

          <h3>Core Values</h3>

          <p>
            Innovation, Integrity, Quality, Collaboration, Continuous
            Learning, and Customer-Centric Development drive everything
            we build.
          </p>

        </div>

      </section>
            {/* ===================================
              WHAT WE DO
      =================================== */}

      <section className="servicesSection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              WHAT WE DO
            </span>

            <h2>
              Comprehensive Technology Services
            </h2>

            <p>
              We help businesses innovate, automate, and scale with
              custom software solutions designed for long-term success.
            </p>

          </div>

          <div className="servicesGrid">

            <div className="serviceCard">

              <Globe size={42} />

              <h3>Web Development</h3>

              <p>
                Responsive websites, enterprise portals, eCommerce
                platforms, and modern SaaS applications built with
                React, Angular, Vue, and Next.js.
              </p>

            </div>

            <div className="serviceCard">

              <Smartphone size={42} />

              <h3>Mobile Applications</h3>

              <p>
                Cross-platform Android and iOS applications using
                Flutter and React Native with exceptional user
                experiences.
              </p>

            </div>

            <div className="serviceCard">

              <Cloud size={42} />

              <h3>Cloud Solutions</h3>

              <p>
                Cloud migration, DevOps, CI/CD pipelines,
                infrastructure automation, and scalable deployment
                on AWS and Azure.
              </p>

            </div>

            <div className="serviceCard">

              <BrainCircuit size={42} />

              <h3>Artificial Intelligence</h3>

              <p>
                AI-powered chatbots, intelligent automation,
                recommendation engines, predictive analytics,
                and generative AI solutions.
              </p>

            </div>

            <div className="serviceCard">

              <Database size={42} />

              <h3>Enterprise Software</h3>

              <p>
                ERP, CRM, HRMS, inventory management,
                workflow automation, and custom business
                software development.
              </p>

            </div>

            <div className="serviceCard">

              <ShieldCheck size={42} />

              <h3>Cyber Security</h3>

              <p>
                Secure software architecture,
                authentication systems,
                API security,
                and enterprise-grade data protection.
              </p>

            </div>

          </div>

        </div>

      </section>





      {/* ===================================
              INDUSTRIES
      =================================== */}

      <section className="industrySection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Delivering Digital Innovation Across Industries
            </h2>

            <p>
              Our expertise enables organizations from diverse
              industries to embrace digital transformation and
              achieve sustainable growth.
            </p>

          </div>

          <div className="industryGrid">

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Healthcare</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Finance</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Education</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Retail & eCommerce</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Manufacturing</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Real Estate</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Logistics</h3>
            </div>

            <div className="industryCard">
              <Building2 size={38}/>
              <h3>Travel & Hospitality</h3>
            </div>

          </div>

        </div>

      </section>





      {/* ===================================
              WHY CHOOSE US
      =================================== */}

      <section className="whySection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              WHY CHOOSE HEXONIQUE
            </span>

            <h2>
              Technology That Creates Business Value
            </h2>

            <p>
              We combine engineering excellence, innovation,
              and strategic thinking to deliver software
              solutions that help businesses stay ahead.
            </p>

          </div>

          <div className="whyCards">

            {whyChoose.map((item, index) => (

              <div
                className="whyCard"
                key={index}
              >

                <CheckCircle2 size={24}/>

                <h3>{item}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>






      {/* ===================================
              DEVELOPMENT PROCESS
      =================================== */}

      <section className="processSection">

        <div className="container">

          <div className="processHeading">

            <span className="sectionTitle">
              OUR DEVELOPMENT PROCESS
            </span>

            <h2>
              From Idea to Successful Product
            </h2>

            <p>
              We follow a transparent Agile methodology that
              ensures quality, collaboration, and faster delivery.
            </p>

          </div>

          <div className="processGrid">

            {process.map((item, index) => (

              <div
                className="processCard"
                key={index}
              >

                <div className="processIcon">

                  {item.icon}

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ===================================
              TECHNOLOGY STACK
      =================================== */}

      <section className="technologySection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              TECHNOLOGY STACK
            </span>

            <h2>
              Technologies We Build With
            </h2>

            <p>
              We leverage modern technologies, frameworks, and cloud
              platforms to build scalable, secure, and future-ready
              digital solutions.
            </p>

          </div>

          <div className="techGrid">

            {[
              "React",
              "Next.js",
              "Angular",
              "Vue.js",
              "Node.js",
              "Express.js",
              "Java",
              "Spring Boot",
              ".NET",
              "Python",
              "Flutter",
              "React Native",
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Firebase",
            ].map((tech, index) => (

              <div
                key={index}
                className="techCard"
              >
                {tech}
              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ===================================
              CORE VALUES
      =================================== */}

      <section className="valuesSection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              OUR CORE VALUES
            </span>

            <h2>
              Principles That Guide Everything We Build
            </h2>

            <p>
              Our values shape every decision, every project,
              and every partnership we create.
            </p>

          </div>

          <div className="valuesGrid">

            {values.map((item, index) => (

              <div
                key={index}
                className="valueCard"
              >

                <div className="valueIcon">

                  {item.icon}

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ===================================
              COMPANY STATS
      =================================== */}

      <section className="statsSection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              COMPANY HIGHLIGHTS
            </span>

            <h2>
              Driving Innovation Through Technology
            </h2>

          </div>

          <div className="statsGrid">

            <div className="statCard">

              <h2>50+</h2>

              <p>
                Projects Delivered
              </p>

            </div>

            <div className="statCard">

              <h2>20+</h2>

              <p>
                Modern Technologies
              </p>

            </div>

            <div className="statCard">

              <h2>10+</h2>

              <p>
                Industries Served
              </p>

            </div>

            <div className="statCard">

              <h2>100%</h2>

              <p>
                Client Commitment
              </p>

            </div>

            <div className="statCard">

              <h2>24/7</h2>

              <p>
                Technical Support
              </p>

            </div>

            <div className="statCard">

              <h2>99.9%</h2>

              <p>
                System Reliability
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ===================================
              OUR TEAM
      =================================== */}

      <section className="teamSection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              OUR TEAM
            </span>

            <h2>
              Passionate Minds Behind Every Solution
            </h2>

            <p>
              Our multidisciplinary professionals combine strategy,
              design, engineering, cloud expertise, AI innovation,
              and quality assurance to deliver world-class software.
            </p>

          </div>

          <div className="teamGrid">

            <div className="teamCard">

              <Code2 size={42}/>

              <h3>
                Software Engineers
              </h3>

              <p>
                Building scalable applications using modern
                programming languages and frameworks.
              </p>

            </div>

            <div className="teamCard">

              <PenTool size={42}/>

              <h3>
                UI / UX Designers
              </h3>

              <p>
                Designing intuitive user experiences
                that customers love.
              </p>

            </div>

            <div className="teamCard">

              <ShieldCheck size={42}/>

              <h3>
                Cloud & DevOps Experts
              </h3>

              <p>
                Secure infrastructure,
                automation,
                monitoring,
                and deployment.
              </p>

            </div>

            <div className="teamCard">

              <TrendingUp size={42}/>

              <h3>
                Project Managers
              </h3>

              <p>
                Ensuring successful project delivery,
                collaboration,
                and transparent communication.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ===================================
              TESTIMONIALS
      =================================== */}

      <section className="testimonialSection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              CLIENT TESTIMONIALS
            </span>

            <h2>
              Trusted By Growing Businesses
            </h2>

          </div>

          <div className="testimonialGrid">

            <div className="testimonialCard">

              <p>

                "Hexonique transformed our business idea into
                a scalable SaaS platform with outstanding quality
                and professional communication."

              </p>

              <h4>

                — Startup Founder

              </h4>

            </div>

            <div className="testimonialCard">

              <p>

                "Their engineering team delivered exactly what
                we needed while maintaining excellent support
                throughout the project."

              </p>

              <h4>

                — Enterprise Client

              </h4>

            </div>

            <div className="testimonialCard">

              <p>

                "Highly recommended for businesses looking
                for reliable software development and long-term
                technology partnerships."

              </p>

              <h4>

                — Business Owner

              </h4>

            </div>

          </div>

        </div>

      </section>



      {/* ===================================
              CTA
      =================================== */}

      <section className="ctaSection">

        <div className="container">

          <span className="sectionTitle">

            LET'S BUILD TOGETHER

          </span>

          <h2>

            Ready to Transform Your Business with Technology?

          </h2>

          <p>

            Whether you're launching a startup, building a SaaS
            platform, modernizing enterprise software, or adopting
            AI-driven solutions, Hexonique Technologies is ready
            to turn your vision into reality.

          </p>

          <div className="ctaButtons">

            <Link
              to="/contact"
              className="ctaButton"
            >

              Start Your Project

            </Link>

            <Link
              to="/services"
              className="secondaryButton"
            >

              Explore Services

            </Link>

          </div>

        </div>

      </section>



      <Footer />

    </main>
  );
}

export default About;