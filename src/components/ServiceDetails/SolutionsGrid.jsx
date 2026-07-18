import styles from "./ServiceDetails.module.css";

function SolutionsGrid({ service }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Our Solutions</h2>

        <div className={styles.grid}>

          {service.features.map((item) => (

            <div key={item} className={styles.card}>
              <h3>{item}</h3>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default SolutionsGrid;