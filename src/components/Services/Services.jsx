const services = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Digital Marketing",
  "SEO",
  "Cloud Solutions",
];

function Services() {
  return (
    <section>
      <h2>Our Services</h2>

      <div className="grid">
        {services.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
            <p>
              Professional {item} services for startups and businesses.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;