import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapReveal() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".gsap-reveal");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });
  }, []);
}

export default useGsapReveal;
