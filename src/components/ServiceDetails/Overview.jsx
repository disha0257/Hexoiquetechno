import styles from "./ServiceDetails.module.css";

function Overview({ service }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Overview</h2>

        <p>{service.description}</p>

      </div>
    </section>
  );
}

export default Overview;