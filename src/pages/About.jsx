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
  Users,
  Lightbulb,
  Award,
  Handshake,
  TrendingUp,
} from "lucide-react";

import "./About.css";
import Footer from "../components/Footer/Footer";


function About() {


const process = [
{
icon:<Search size={32}/>,
title:"Discovery & Planning",
text:"We understand your business goals and create the right digital strategy."
},

{
icon:<PenTool size={32}/>,
title:"UI/UX Design",
text:"We design modern, simple and engaging experiences for users."
},

{
icon:<Code2 size={32}/>,
title:"Development",
text:"We build scalable, secure and high-performance digital solutions."
},

{
icon:<Rocket size={32}/>,
title:"Launch & Support",
text:"We deliver your product and provide continuous technical support."
}

];


const whyChoose = [
"Expert Development Team",
"Modern Technology Stack",
"Transparent Communication",
"Secure & Scalable Solutions",
"Agile Development Approach",
"Long Term Technical Support"
];


const values = [

{
icon:<Lightbulb/>,
title:"Innovation",
text:"Creating modern solutions using latest technologies."
},

{
icon:<ShieldCheck/>,
title:"Integrity",
text:"Maintaining honesty and transparency in every project."
},

{
icon:<Award/>,
title:"Quality",
text:"Delivering reliable and high-quality software products."
},

{
icon:<Handshake/>,
title:"Collaboration",
text:"Building strong partnerships with our clients."
}

];



return (

<main className="about">


{/* HERO */}

<section className="aboutHero">

<div className="floating-circle circle1"></div>
<div className="floating-circle circle2"></div>
<div className="floating-circle circle3"></div>


<div className="container">


<span className="sectionTitle">
ABOUT HEXONIQUE
</span>


<h1>
Building Digital Experiences
<span>
That Drive Business Growth
</span>
</h1>


<p>
Hexonique Technologies helps businesses transform digitally
with innovative websites, mobile applications, enterprise software,
AI solutions and cloud technologies.
</p>


</div>

</section>




{/* COMPANY STORY */}


<section className="storySection">

<div className="container storyGrid">


<div>

<span className="sectionTitle">
WHO WE ARE
</span>


<h2>
Technology Partner For Digital Transformation
</h2>


<p>
Hexonique Technologies is a software development company
focused on creating innovative digital solutions for startups
and enterprises.
</p>


<p>
We combine creativity, technology and business strategy
to build websites, applications and software solutions that
help businesses grow faster.
</p>


</div>



<div className="storyBox">

<h3>
Our Mission
</h3>

<p>
Deliver reliable technology solutions that create measurable
business value.
</p>


</div>


</div>

</section>






{/* MISSION VISION VALUES */}


<section className="container aboutCards">


<div className="aboutCard">

<Target/>

<h3>
Mission
</h3>

<p>
Deliver reliable technology solutions that solve real business problems.
</p>

</div>




<div className="aboutCard">

<Eye/>

<h3>
Vision
</h3>

<p>
Become a trusted technology partner through innovation and excellence.
</p>

</div>




<div className="aboutCard">

<Heart/>

<h3>
Values
</h3>

<p>
Innovation, Integrity, Quality and Customer Success.
</p>

</div>


</section>








{/* WHY CHOOSE */}



<section className="whySection">


<div className="container">


<div className="sectionHeading">


<span className="sectionTitle">
WHY CHOOSE US
</span>


<h2>
Why Businesses Trust Hexonique
</h2>


<p>
We focus on delivering technology solutions that create
long-term business value.
</p>


</div>




<div className="whyCards">


{
whyChoose.map((item,index)=>(

<div className="whyCard" key={index}>

<CheckCircle2/>

<h3>
{item}
</h3>

</div>

))
}


</div>


</div>


</section>







{/* PROCESS */}


<section className="processSection">


<div className="container">


<div className="processHeading">


<span className="sectionTitle">
OUR PROCESS
</span>


<h2>
How We Build Digital Solutions
</h2>


<p>
A simple and transparent process that helps us deliver
successful products.
</p>


</div>




<div className="processGrid">


{
process.map((item,index)=>(

<div className="processCard" key={index}>


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

))
}


</div>


</div>


</section>








{/* VALUES */}



<section className="valuesSection">


<div className="container">


<span className="sectionTitle">
OUR VALUES
</span>


<h2>
What Drives Hexonique
</h2>



<div className="valuesGrid">


{
values.map((item,index)=>(

<div className="valueCard" key={index}>


{item.icon}


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>


))
}


</div>


</div>


</section>








{/* STATS */}



<section className="statsSection">


<div className="container statsGrid">


<div>
<h2>5+</h2>
<p>Technology Areas</p>
</div>


<div>
<h2>100%</h2>
<p>Client Focus</p>
</div>


<div>
<h2>24/7</h2>
<p>Support</p>
</div>


<div>
<h2>Agile</h2>
<p>Development</p>
</div>


</div>


</section>








{/* CTA */}



<section className="ctaSection">


<div className="container">


<h2>
Let's Build Something Exceptional Together
</h2>


<p>
Create innovative digital solutions that accelerate your business growth.
</p>



<Link 
to="/contact"
className="ctaButton"
>

Start Your Project

</Link>


</div>


</section>



<Footer/>


</main>

)

}


export default About;