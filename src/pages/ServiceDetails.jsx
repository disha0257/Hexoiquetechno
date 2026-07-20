import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

import HeroSection from "../components/ServiceDetails/HeroSection";
import Overview from "../components/ServiceDetails/Overview";
import ProblemsSection from "../components/ServiceDetails/ProblemsSection";
import SolutionsGrid from "../components/ServiceDetails/SolutionsGrid";
import BenefitsSection from "../components/ServiceDetails/BenefitsSection";
import ProcessTimeline from "../components/ServiceDetails/ProcessTimeline";
import Technologies from "../components/ServiceDetails/Technologies";
import Industries from "../components/ServiceDetails/Industries";
import FAQ from "../components/ServiceDetails/FAQ";
import CTA from "../components/ServiceDetails/CTA";

function ServiceDetails() {
  const { slug } = useParams();

  const service = Object.values(servicesData).find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <HeroSection service={service} />
      <Overview service={service} />
      <ProblemsSection service={service} />
      <SolutionsGrid service={service} />
      <BenefitsSection service={service} />
      <ProcessTimeline />
      <Technologies service={service} />
      <Industries service={service} />
      <FAQ service={service} />
      <CTA />
    </>
  );
}

export default ServiceDetails;