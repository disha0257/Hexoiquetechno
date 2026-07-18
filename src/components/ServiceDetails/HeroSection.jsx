import styles from "./ServiceDetails.module.css";

function HeroSection({ service }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.heroContent}>
          <span>OUR SERVICES</span>

          <h1>{service.title}</h1>

          <p>{service.subtitle}</p>
        </div>

        <div className={styles.heroImage}>
          <img src={service.heroImage} alt={service.title} />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;