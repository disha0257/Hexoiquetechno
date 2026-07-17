import "../App.css";
import "./Services.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  Code2,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";


const services = [

{
icon:<Code2/>,
title:"Software Development",
description:
"Custom web and enterprise applications designed with scalable architecture, clean code and modern technologies.",
features:[
"Web Application Development",
"Enterprise Software",
"API Development"
]
},


{
icon:<Smartphone/>,
title:"Mobile App Development",
description:
"High-performance Android and iOS applications that deliver smooth user experiences.",
features:[
"Flutter Development",
"Native Applications",
"Mobile UI/UX"
]
},


{
icon:<Cloud/>,
title:"Cloud & DevOps",
description:
"Reliable cloud solutions with automation, deployment pipelines and infrastructure management.",
features:[
"AWS & Cloud Setup",
"CI/CD Pipeline",
"Server Management"
]
},


{
icon:<BrainCircuit/>,
title:"AI & Automation",
description:
"Intelligent automation solutions that improve productivity and business operations.",
features:[
"AI Integration",
"Business Automation",
"Smart Systems"
]
},


{
icon:<ShieldCheck/>,
title:"Cybersecurity",
description:
"Protect your digital assets with secure architecture and advanced security practices.",
features:[
"Security Audits",
"Data Protection",
"Monitoring"
]
},


{
icon:<Database/>,
title:"Database Solutions",
description:
"Optimized database design and management for fast and secure applications.",
features:[
"MySQL",
"MongoDB",
"Database Optimization"
]
}

];





function Services(){


return(

<div className="services-page">


{/* FULL PAGE BACKGROUND ANIMATION */}

<div className="background-animation">

<span className="bg-circle circle-one"></span>

<span className="bg-circle circle-two"></span>

<span className="bg-circle circle-three"></span>


</div>





<Header/>







<section className="services-hero">


<div className="container">


<span className="hero-badge">
OUR SERVICES
</span>



<h1>
Digital Solutions
<br/>
Built For Business Growth
</h1>



<p>

We create powerful software solutions that help startups
and enterprises improve efficiency, scale faster and achieve
digital success.

</p>





<div className="hero-buttons">


<button className="service-btn">

Start Your Project

<ArrowRight size={18}/>

</button>


</div>



</div>


</section>









<section className="services-section">


<div className="container">



<div className="section-heading">


<span>
WHAT WE DO
</span>


<h2>
Complete Technology Solutions
</h2>


<p>
From software development to cloud solutions,
we provide everything your business needs.
</p>


</div>









<div className="service-grid">


{

services.map((service,index)=>(


<div

className="service-card"

key={index}

style={{
animationDelay:`${index * 0.15}s`
}}

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

{

service.features.map((item)=>(

<li key={item}>

<CheckCircle size={16}/>

{item}

</li>

))

}

</ul>




</div>


))

}



</div>


</div>


</section>

<section className="service-cta">


<div className="cta-background">

<span></span>
<span></span>
<span></span>

</div>



<div className="container">


<div className="cta-box">


<div className="cta-content">


<span className="cta-tag">
START YOUR PROJECT
</span>


<h2>
Have an Idea?
<br/>
Let's Turn It Into Reality
</h2>


<p>

Our team helps businesses create scalable,
secure and high-performance digital solutions.

</p>



<div className="cta-buttons">


<button>

Contact Us

<ArrowRight size={18}/>

</button>



<button className="outline-btn">

Explore Services

</button>


</div>



</div>




<div className="cta-card">


<div>
<h3>
24+
</h3>

<p>
Projects Delivered
</p>

</div>



<div>
<h3>
99%
</h3>

<p>
Client Satisfaction
</p>

</div>



<div>
<h3>
24/7
</h3>

<p>
Support
</p>

</div>


</div>



</div>



</div>



</section>
<Footer/>
</div>
)
}
export default Services;