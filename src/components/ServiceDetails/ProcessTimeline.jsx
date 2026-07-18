import styles from "./ServiceDetails.module.css";

const steps = [
  "Requirement Analysis",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Support"
];

function ProcessTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Our Process</h2>

        <div className={styles.timeline}>

          {steps.map((step, index) => (

            <div key={step} className={styles.step}>
              <span>{index + 1}</span>
              <h4>{step}</h4>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ProcessTimeline;