import styles from "./ServicesSection.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaArrowRight,
  FaReact,
  FaJava,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiKotlin,
  SiFigma,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";


const services = [

  {
    number:"01",

    icon:<FaLaptopCode/>,

    title:"Web Development",

    description:
    "Modern, scalable and high-performance web applications using latest frontend and backend technologies.",

    link:"web-development",

    tech:[

      {
        icon:<SiReact/>,
        label:"React JS"
      },

      {
        icon:<SiNextdotjs/>,
        label:"Next JS"
      },

      {
        icon:<SiNodedotjs/>,
        label:"Node JS"
      },

      {
        icon:<SiLaravel/>,
        label:"PHP Laravel"
      },

      {
        icon:<FaLaptopCode/>,
        label:"ASP.NET Core"
      },

      {
        icon:<SiMysql/>,
        label:"MySQL"
      },

      {
        icon:<SiMongodb/>,
        label:"MongoDB"
      }

    ]

  },



  {
    number:"02",

    icon:<FaMobileAlt/>,

    title:"App Development",

    description:
    "Cross-platform mobile applications with smooth performance and modern user experience for Android and iOS.",

    link:"app-development",

    tech:[

      {
        icon:<SiFlutter/>,
        label:"Flutter"
      },

      {
        icon:<FaReact/>,
        label:"React Native"
      },

      {
        icon:<SiKotlin/>,
        label:"Kotlin"
      },

      {
        icon:<FaJava/>,
        label:"Java"
      }

    ]

  },



  {
    number:"03",

    icon:<FaPalette/>,

    title:"UI / UX Design",

    description:
    "Creative and user-focused designs that improve usability, accessibility and digital experiences.",

    link:"ui-ux-design",

    tech:[

      {
        icon:<SiFigma/>,
        label:"Figma"
      },

      {
  icon:<FaPalette/>,
  label:"Adobe XD"
}
    ]

  },



  {
    number:"04",

    icon:<FaLaptopCode/>,

    title:"Web Design",

    description:
    "Responsive and visually appealing websites built with modern design standards.",

    link:"web-design",

    tech:[

  {
    icon:<SiHtml5/>,
    label:"HTML5"
  },

  {
    icon:<FaCss3Alt/>,
    label:"CSS3"
  },

  {
    icon:<SiTailwindcss/>,
    label:"Tailwind CSS"
  }

]

  }

];





function ServicesSection() {


  const [active,setActive] = useState(0);



  useEffect(()=>{

    const timer=setInterval(()=>{

      setActive(
        prev => (prev + 1) % services.length
      );

    },5000);


    return ()=>clearInterval(timer);


  },[]);



  const service = services[active];



  return (

<section className={styles.services}>


<div className={styles.container}>


<div className={styles.layout}>



<AnimatePresence mode="wait">


<motion.div

key={service.number}

className={styles.left}

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:40
}}

transition={{
duration:0.5
}}

>


<span className={styles.smallTitle}>
OUR SERVICES
</span>



<h2>

Technology Solutions

<br/>

<span>
Built For Future Businesses.
</span>

</h2>




<div className={styles.serviceHeader}>


<div className={styles.serviceNumber}>

{service.number}

</div>



<div className={styles.titleRow}>


<div className={styles.serviceIcon}>

{service.icon}

</div>



<h3>
{service.title}
</h3>


</div>


</div>





<p>
{service.description}
</p>





<Link

to={`/services/${service.link}`}

className={styles.button}

>

Explore Service

<FaArrowRight/>

</Link>



</motion.div>


</AnimatePresence>






<div className={styles.right}>


<div className={styles.orb}></div>



{service.tech.map((item,index)=>(


<motion.div

key={index}

className={`${styles.tech} ${styles["t"+index]}`}


animate={{

y:[0,-12,0]

}}


transition={{

repeat:Infinity,

duration:3+index

}}

>


{item.icon}


<span>
{item.label}
</span>



</motion.div>


))}


</div>





</div>







<div className={styles.navigation}>


{

services.map((item,index)=>(


<button

key={item.number}

onClick={()=>setActive(index)}

className={

active===index

?

styles.activeButton

:

styles.navButton

}

>


{item.title}


</button>


))

}


</div>





</div>


</section>

  );

}



export default ServicesSection;