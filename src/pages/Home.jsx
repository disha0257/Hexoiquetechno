// src/pages/Home.jsx

import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import QuickContact from "../components/QuickContact/QuickContact";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChoose />
      <QuickContact />
    </>
  );
}

export default Home;