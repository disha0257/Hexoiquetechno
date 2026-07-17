// src/pages/Home.jsx

import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import QuickContact from "../components/QuickContact/QuickContact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChoose />
      <QuickContact />
      <Footer/>
    </>
  );
}

export default Home;