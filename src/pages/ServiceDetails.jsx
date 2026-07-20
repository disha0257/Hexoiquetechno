import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

function ServiceDetails() {
  const { slug } = useParams();

  const service = Object.values(servicesData).find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Service Not Found</h1>
      </div>
    );
  }

  return (
    <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>{service.title}</h1>
      <p>{service.subtitle}</p>

      <hr />

      <h2>{service.overview?.title}</h2>
      <p>{service.overview?.description}</p>

      <h2>Services</h2>
      <ul>
        {service.services?.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      <h2>Technologies</h2>
      <ul>
        {service.technologies?.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h2>Industries</h2>
      <ul>
        {service.industries?.map((industry, index) => (
          <li key={index}>{industry}</li>
        ))}
      </ul>
    </section>
  );
}

export default ServiceDetails;