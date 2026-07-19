import { Link } from "react-router-dom";

import {
  Target,
  Eye,
  Heart,
  Search,
  PenTool,
  Code2,
  Rocket,
  Building2,
} from "lucide-react";

import "./About.css";
import Footer from "../components/Footer/Footer";

function About() {
  /* ===================================
        DEVELOPMENT PROCESS
  =================================== */

  const process = [
    {
      icon: <Search size={34} />,
      title: "Discovery & Planning",
      text: "We understand your business goals, target audience, and project requirements before beginning development.",
    },
    {
      icon: <PenTool size={34} />,
      title: "UI / UX Design",
      text: "Our designers craft intuitive, engaging, and user-friendly interfaces that deliver exceptional user experiences.",
    },
    {
      icon: <Code2 size={34} />,
      title: "Development",
      text: "Our engineers build scalable, secure, and high-performance applications using modern technologies.",
    },
    {
      icon: <Rocket size={34} />,
      title: "Deployment & Support",
      text: "After successful testing, we deploy your solution and provide ongoing maintenance and technical support.",
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
            Building Innovative Software
            <span> For The Digital Future.</span>
          </h1>

          <p>
            Hexonique Technologies is a modern software development company
            dedicated to helping startups, businesses, and enterprises build
            innovative digital products. We deliver scalable, secure, and
            user-centric software solutions that accelerate business growth,
            improve operational efficiency, and create lasting digital impact.
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
              WHO WE ARE
      =================================== */}

      <section className="storySection">

        <div className="container storyGrid">

          <div className="storyContent">

            <span className="sectionTitle">
              WHO WE ARE
            </span>

            <h2>
              Your Trusted Technology Partner
              For Digital Innovation
            </h2>

            <p>
              At <strong>Hexonique Technologies</strong>, we are passionate
              about transforming innovative ideas into powerful digital
              solutions. Our team combines technical expertise, creative
              thinking, and industry best practices to build software that
              helps businesses grow, innovate, and stay ahead in an
              ever-changing digital world.
            </p>

            <p>
              Whether you're a startup building your first product, a growing
              business expanding your digital presence, or an enterprise
              modernizing legacy systems, we deliver scalable, secure, and
              future-ready solutions tailored to your unique business goals.
            </p>

            <p>
              We believe in long-term partnerships built on transparency,
              collaboration, quality, and continuous innovation. Every project
              we deliver is designed to create measurable business value and
              exceptional user experiences.
            </p>

          </div>

          <div className="storyCards">

            <div className="storyCard">

              <Code2 size={42} />

              <h3>Innovation Driven</h3>

              <p>
                We leverage modern technologies and creative thinking to build
                intelligent, scalable, and future-ready software solutions.
              </p>

            </div>

            <div className="storyCard">

              <Rocket size={42} />

              <h3>Customer Success</h3>

              <p>
                Our success is measured by the success of our clients. We focus
                on delivering solutions that drive growth, efficiency, and
                long-term business value.
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

          <Target size={42} />

          <h3>Our Mission</h3>

          <p>
            To empower businesses with innovative, secure, and scalable
            software solutions that simplify complex challenges, accelerate
            digital transformation, and create long-term business value.
          </p>

        </div>

        <div className="aboutCard">

          <Eye size={42} />

          <h3>Our Vision</h3>

          <p>
            To become a globally trusted technology partner recognized for
            engineering excellence, continuous innovation, and delivering
            world-class digital experiences that inspire business success.
          </p>

        </div>

        <div className="aboutCard">

          <Heart size={42} />

          <h3>Our Values</h3>

          <p>
            We are driven by Innovation, Integrity, Quality, Transparency,
            Customer Success, Collaboration, and Continuous Learning in every
            project we deliver.
          </p>

        </div>

      </section>
            {/* ===================================
              INDUSTRIES WE SERVE
      =================================== */}

      <section className="industrySection">

        <div className="container">

          <div className="sectionHeading">

            <span className="sectionTitle">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Delivering Digital Solutions Across Industries
            </h2>

            <p>
              We help organizations embrace digital transformation by
              delivering reliable, scalable, and innovative software
              solutions tailored to their industry needs.
            </p>

          </div>

          <div className="industryGrid">

            {[
              "Healthcare",
              "Finance & Banking",
              "Education",
              "Retail & eCommerce",
              "Manufacturing",
              "Real Estate",
              "Logistics",
              "Travel & Hospitality",
            ].map((industry, index) => (

              <div
                key={index}
                className="industryCard"
              >

                <Building2 size={38} />

                <h3>{industry}</h3>

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
              Turning Ideas Into Successful Digital Products
            </h2>

            <p>
              Our streamlined development process ensures transparency,
              collaboration, quality, and timely delivery at every stage.
            </p>

          </div>

          <div className="processGrid">

            {process.map((item, index) => (

              <div
                key={index}
                className="processCard"
              >

                <div className="processIcon">

                  {item.icon}

                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            ))}

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

            Ready to Transform Your Business?

          </h2>

          <p>

            Whether you're launching a startup, scaling your business,
            or modernizing enterprise software, Hexonique Technologies
            is here to turn your ideas into powerful digital solutions.

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