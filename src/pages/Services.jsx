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
  Cloud,
  Database,
  ShieldCheck,
  ShoppingCart,
  Palette,
  Network,
  Settings,
  BarChart3,
} from "lucide-react";


const services = [

{
  icon: <Globe />,
  title: "Web Development",
  description:
    "Responsive, scalable, and high-performance websites and web applications built using modern frontend and backend technologies.",
  technologies: [
    "React.js",
    "Next.js",
    "Node.js",
    "PHP Laravel",
    "ASP.NET Core",
    "MySQL",
    "MongoDB"
  ],
  link: "/services/web-development",
},


{
  icon: <Smartphone />,
  title: "Mobile App Development",
  description:
    "Cross-platform and native mobile applications for Android and iOS with smooth performance and modern user experiences.",
  technologies: [
    "Flutter",
    "React Native",
    "Java",
    "Kotlin"
  ],
  link: "/services/mobile-development",
},


{
  icon: <Code2 />,
  title: "Desktop Software Development",
  description:
    "Powerful desktop applications developed for business automation, management systems, and enterprise solutions.",
  technologies: [
    ".NET",
    "Java",
    "Python",
    "C#",
    "C++"
  ],
  link: "/services/software-development",
},


{
  icon: <Cloud />,
  title: "SaaS Application Development",
  description:
    "Cloud-based SaaS platforms designed with scalable architecture, subscription models, and secure user management.",
  technologies: [
    "React.js",
    "Next.js",
    "Node.js",
    "Python"
  ],
  link: "/services/saas-development",
},


{
  icon: <Network />,
  title: "API & Backend Development",
  description:
    "Secure backend systems and REST APIs that power modern applications with reliable performance.",
  technologies: [
    "Node.js",
    "Express.js",
    "Django",
    "Laravel"
  ],
  link: "/services/api-development",
},


{
  icon: <Palette />,
  title: "UI / UX Design",
  description:
    "Creative and user-focused interface designs that improve usability and deliver better digital experiences.",
  technologies: [
    "Figma",
    "Adobe XD"
  ],
  link: "/services/ui-ux-design",
},


{
  icon: <Palette />,
  title: "Web Design",
  description:
    "Modern website designs with responsive layouts, attractive visuals, and optimized user experience.",
  technologies: [
    "Figma",
    "Adobe XD",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS"
  ],
  link: "/services/web-design",
},


{
  icon: <Database />,
  title: "Database Solutions",
  description:
    "Secure and optimized database solutions for storing, managing, and processing business data.",
  technologies: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase"
  ],
  link: "/services/database-solutions",
},


{
  icon: <ShieldCheck />,
  title: "Cyber Security",
  description:
    "Security solutions to protect applications, systems, and sensitive business information.",
  technologies: [
    "API Security",
    "Data Protection",
    "Security Testing"
  ],
  link: "/services/cyber-security",
},


{
  icon: <ShoppingCart />,
  title: "E-Commerce Development",
  description:
    "Secure and scalable online stores with payment integration and excellent shopping experiences.",
  technologies: [
    "React.js",
    "Node.js",
    "PHP Laravel",
    "MySQL",
    "MongoDB"
  ],
  link: "/services/ecommerce-development",
},


{
  icon: <Settings />,
  title: "ERP & CRM Solutions",
  description:
    "Business management systems to improve workflow, customer management, and productivity.",
  technologies: [
    ".NET",
    "Laravel",
    "React.js",
    "MySQL"
  ],
  link: "/services/erp-crm",
},


{
  icon: <BarChart3 />,
  title: "Maintenance & Support",
  description:
    "Continuous application monitoring, optimization, updates, and technical support.",
  technologies: [
    "Bug Fixing",
    "Performance Optimization",
    "Server Management"
  ],
  link: "/services/support-maintenance",
},

];



function Services() {

return (

<div className="services-page">

<Header />



<section className="services-hero">


<div className="hero-circle circle1"></div>
<div className="hero-circle circle2"></div>
<div className="hero-circle circle3"></div>



<div className="container hero-grid">


<div className="hero-content">


<span className="hero-badge">
OUR DIGITAL SERVICES
</span>



<h1>
Building Digital Solutions
<span> For Modern Businesses</span>
</h1>



<p>

At <strong>Hexonique Technologies</strong>, we create innovative
software solutions that help startups, SMEs, and enterprises
transform ideas into powerful digital products. Our expertise
covers web development, mobile apps, SaaS platforms, AI,
cloud solutions, and enterprise applications.

</p>



<div className="hero-buttons">


<Link to="/contact" className="primary-btn">

Start Your Project

<ArrowRight size={18}/>

</Link>



<Link to="/about" className="secondary-btn">

About Us

</Link>


</div>


</div>




<div className="hero-card">


<div className="hero-stat">
<h2>12+</h2>
<p>Professional Services</p>
</div>


<div className="hero-stat">
<h2>50+</h2>
<p>Business Solutions</p>
</div>


<div className="hero-stat">
<h2>24×7</h2>
<p>Technical Support</p>
</div>


<div className="hero-stat">
<h2>100%</h2>
<p>Client Satisfaction Focus</p>
</div>


</div>


</div>


</section>





<section className="services-section">


<div className="container">


<div className="section-heading">

<span>OUR SERVICES</span>

<h2>
End-to-End Digital Solutions
</h2>


<p>
We provide innovative, scalable, and secure technology solutions
that help businesses grow faster and achieve digital transformation.
</p>


</div>




<div className="service-grid">


{
services.map((service,index)=>(


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



<div className="service-technologies">


<h4>
Technologies:
</h4>


<div className="tech-tags">


{
service.technologies.map((tech,i)=>(

<span key={i}>
{tech}
</span>

))
}


</div>


</div>



<ul className="service-features">


<li>
<CheckCircle2 size={18}/>
Custom Solutions
</li>


<li>
<CheckCircle2 size={18}/>
Scalable Architecture
</li>


<li>
<CheckCircle2 size={18}/>
Secure Development
</li>


<li>
<CheckCircle2 size={18}/>
Long-Term Support
</li>


</ul>




{/* <Link 
to={service.link}
className="learn-more"
>

Learn More

<ArrowRight size={18}/>

</Link> */}


</div>


))


}


</div>


</div>


</section>





<section className="technology-section">


<div className="container">


<div className="section-heading">


<span>
TECHNOLOGIES WE USE
</span>



<h2>
Modern Technologies We Build With
</h2>



<p>
We use modern frameworks, programming languages, databases,
and cloud technologies to build secure and scalable applications.
</p>


</div>



<div className="technology-grid">


{

[
"React.js",
"Next.js",
"Node.js",
"Express.js",
"PHP",
"Laravel",
"ASP.NET Core",
"Python",
"Django",
"Flutter",
"React Native",
"Java",
"Kotlin",
"C#",
"C++",
".NET",
"MySQL",
"MongoDB",
"PostgreSQL",
"Firebase",
"AWS",
"Docker",
"Git",
"REST API",
"GraphQL",
"Figma",
"Adobe XD",
"HTML",
"CSS",
"Bootstrap",
"Tailwind CSS"

].map((tech,index)=>(


<div
key={index}
className="technology-card"
>

<span>
{tech}
</span>

</div>


))

}


</div>


</div>


</section>




<Footer />


</div>

);

}


export default Services;