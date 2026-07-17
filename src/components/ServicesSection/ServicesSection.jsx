import styles from "./ServicesSection.module.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaRobot,
  FaArrowRight
} from "react-icons/fa";



const services = [

{
number:"01",
icon:<FaLaptopCode/>,
title:"Custom Software Development",
description:
"Enterprise software solutions designed to automate workflows, improve efficiency and accelerate business growth.",
link:"software"
},


{
number:"02",
icon:<FaLaptopCode/>,
title:"Web Development",
description:
"Modern responsive websites built with powerful technology, optimized performance and SEO-friendly architecture.",
link:"web-development"
},


{
number:"03",
icon:<FaMobileAlt/>,
title:"Mobile Application Development",
description:
"User-friendly Android and iOS applications delivering seamless digital experiences.",
link:"mobile-development"
},


{
number:"04",
icon:<FaPalette/>,
title:"UI / UX Design",
description:
"Creative user-focused designs that improve usability, engagement and customer satisfaction.",
link:"ui-ux"
},


{
number:"05",
icon:<FaCloud/>,
title:"Cloud Solutions",
description:
"Secure cloud infrastructure, deployment and scalable solutions for modern businesses.",
link:"cloud"
},


{
number:"06",
icon:<FaRobot/>,
title:"AI & Automation",
description:
"Intelligent AI solutions that automate processes and improve business productivity.",
link:"ai"
}

];





function ServicesSection(){


return (

<section className={styles.services}>


<div className={styles.container}>




{/* Heading */}

<motion.div

className={styles.heading}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<span>
OUR SERVICES
</span>



<h2>

Technology Solutions

<br/>

Built For Future Businesses

</h2>



<p>

Hexonique Technologies delivers modern software,
cloud, AI and digital transformation solutions
that help businesses grow faster.

</p>


</motion.div>







{/* Services Table */}


<div className={styles.servicesTable}>


{

services.map((service,index)=>(


<motion.div


key={service.number}


className={styles.serviceBox}



initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

duration:.6,

delay:index*.12

}}



viewport={{

once:true

}}



whileHover={{

y:-10

}}


>




<div className={styles.number}>

{service.number}

</div>





<div className={styles.icon}>

{service.icon}

</div>






<h3>

{service.title}

</h3>






<p>

{service.description}

</p>






<Link

to={`/services/${service.link}`}

className={styles.link}

>


Explore Service


<FaArrowRight/>


</Link>





</motion.div>


))


}


</div>









{/* CTA */}


<motion.div


className={styles.footer}


initial={{

opacity:0,

scale:.9

}}



whileInView={{

opacity:1,

scale:1

}}



viewport={{

once:true

}}



>



<h3>

Ready To Transform Your Business?

</h3>




<p>

Let's build secure, scalable and future-ready
digital solutions for your business.

</p>





<Link

to="/contact"

className={styles.button}

>


Start Your Project


<FaArrowRight/>


</Link>



</motion.div>







</div>


</section>

);


}


export default ServicesSection;