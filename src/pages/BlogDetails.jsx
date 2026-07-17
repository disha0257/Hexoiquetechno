import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap
} from "lucide-react";

import "./BlogDetails.css";


function BlogDetails(){


const {id}=useParams();



const data={


"modern-websites":{

title:"How Modern Websites Increase Trust And Lead Growth",

category:"Web Development",

intro:
"A modern website is more than an online presence. It represents your brand identity and creates the first impression for your customers.",


description:
"Businesses today need websites that are fast, secure, mobile-friendly and designed around user experience.",


points:[

"Responsive Design",

"Performance Optimization",

"SEO Friendly Architecture",

"Better User Experience",

"Higher Customer Conversion"

],


impact:
"At Hexonique Technologies, we create scalable websites using modern technologies like React, Node.js and cloud solutions."


},




"cloud-applications":{

title:"Building Scalable Cloud Applications For Growing Teams",

category:"Cloud Technology",

intro:
"Cloud applications help businesses build flexible and scalable digital platforms.",


description:
"Modern cloud solutions improve reliability, performance and reduce infrastructure complexity.",


points:[

"High Availability",

"Better Security",

"Easy Scalability",

"Reduced Infrastructure Cost",

"Faster Deployment"

],


impact:
"Hexonique builds secure cloud applications that support future business growth."

},





"ai-transformation":{


title:"Why AI Should Be Part Of Your Digital Transformation",

category:"Artificial Intelligence",


intro:
"Artificial Intelligence is transforming how businesses operate and make decisions.",


description:
"AI solutions help organizations automate processes and improve customer experiences.",


points:[

"AI Chatbots",

"Business Automation",

"Predictive Analytics",

"Smart Recommendations",

"Data Intelligence"

],


impact:
"Hexonique helps businesses integrate AI-powered solutions into their digital ecosystem."

}


};




const blog=data[id];



return(

<div className="blogDetailsPage">


<Header/>



<section className="blogDetailHero">


<div className="container">


<span>
{blog.category}
</span>


<h1>
{blog.title}
</h1>


</div>


</section>







<section className="blogContent">


<div className="container">


<div className="blogIntro">


<h2>
Digital Innovation For Modern Businesses
</h2>


<p>
{blog.intro}
</p>


</div>





<div className="highlightBox">


<TrendingUp/>

<p>
{blog.description}
</p>


</div>







<h2 className="sectionHeading">

Key Benefits

</h2>




<div className="benefitGrid">


{
blog.points.map((item,index)=>(


<div 
className="benefitCard"
key={index}
>


<CheckCircle2/>


<span>
{item}
</span>


</div>


))
}


</div>







<div className="impactBox">


<Zap/>

<p>
{blog.impact}
</p>


</div>





</div>


</section>





<Footer/>


</div>

)

}


export default BlogDetails;