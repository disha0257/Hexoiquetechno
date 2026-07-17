import { Link } from "react-router-dom";

import "../App.css";
import "./Blog.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  Globe,
  Cloud,
  BrainCircuit,
  ArrowRight
} from "lucide-react";


function Blog(){


const blogs=[

{
id:"modern-websites",

icon:<Globe/>,

category:"Web Development",

title:"How Modern Websites Increase Trust And Lead Growth",

text:
"Discover how modern UI design, performance optimization, and conversion-focused architecture help businesses grow online."

},



{
id:"cloud-applications",

icon:<Cloud/>,

category:"Cloud Technology",

title:"Building Scalable Cloud Applications For Growing Teams",

text:
"Learn how secure cloud solutions help organizations improve reliability, speed, and business efficiency."

},



{
id:"ai-transformation",

icon:<BrainCircuit/>,

category:"Artificial Intelligence",

title:"Why AI Should Be Part Of Your Digital Transformation",

text:
"Explore how automation and intelligent solutions improve productivity and customer experience."

}


];



return(

<div className="blogPage">


<Header/>



<section className="blogHero">


<div className="blogCircle circleOne"></div>

<div className="blogCircle circleTwo"></div>

<div className="blogCircle circleThree"></div>



<div className="container">


<span className="section-title">
INSIGHTS
</span>



<h1>

Technology Insights

<span>
That Drive Innovation
</span>

</h1>



<p>

Explore our latest articles, technical insights,
and digital transformation strategies from Hexonique.

</p>


</div>


</section>







<section className="blogSection">


<div className="container">


<div className="blogGrid">


{

blogs.map((blog)=>(


<article 
className="blogCard"
key={blog.id}
>


<div className="blogIcon">

{blog.icon}

</div>



<span className="blogCategory">

{blog.category}

</span>




<h3>

{blog.title}

</h3>



<p>

{blog.text}

</p>





<Link

to={`/blog/${blog.id}`}

className="readButton"

>

Read More

<ArrowRight size={18}/>


</Link>



</article>


))


}


</div>


</div>


</section>





<Footer/>


</div>


)

}


export default Blog;