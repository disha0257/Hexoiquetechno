import styles from "./ServiceDetails.module.css";

function Technologies({ service }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Technologies We Use</h2>

        <div className={styles.techGrid}>

          {service.technologies.map((tech) => (

            <div key={tech} className={styles.tech}>
              {tech}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Technologies;