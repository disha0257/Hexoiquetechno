import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustedCompanies from "../components/TrustedCompanies/TrustedCompanies";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Technologies from "../components/Technologies/Technologies";
import Stats from "../components/Stats/Stats";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import Industries from "../components/Industries/Industries";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trusted Companies */}
      <TrustedCompanies />

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* Why Choose Hexonique */}
      <WhyChoose />

      {/* Technologies */}
      <Technologies />

      {/* Statistics */}
      <Stats />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Industries */}
      <Industries />

      {/* Contact CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;