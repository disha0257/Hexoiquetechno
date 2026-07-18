import styles from "./ServiceDetails.module.css";

function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Frequently Asked Questions</h2>

        <div className={styles.faq}>

          <h4>How long does development take?</h4>
          <p>Depending on project complexity, usually 4–16 weeks.</p>

          <h4>Do you provide maintenance?</h4>
          <p>Yes, we provide long-term maintenance and support.</p>

          <h4>Can you upgrade existing software?</h4>
          <p>Absolutely. We modernize and improve legacy systems.</p>

        </div>

      </div>
    </section>
  );
}

export default FAQ;