import styles from "./ServiceDetails.module.css";

function BenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Benefits</h2>

        <ul>
          <li>Increase Productivity</li>
          <li>Reduce Costs</li>
          <li>Improve Security</li>
          <li>Scalable Infrastructure</li>
          <li>Better Customer Experience</li>
        </ul>

      </div>
    </section>
  );
}

export default BenefitsSection;