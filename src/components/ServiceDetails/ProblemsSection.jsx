import styles from "./ServiceDetails.module.css";

function ProblemsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Common Business Challenges</h2>

        <ul>
          <li>Slow manual processes</li>
          <li>Outdated systems</li>
          <li>High operational cost</li>
          <li>Poor customer experience</li>
          <li>Data management issues</li>
        </ul>

      </div>
    </section>
  );
}

export default ProblemsSection;