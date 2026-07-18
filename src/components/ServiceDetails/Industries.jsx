import styles from "./ServiceDetails.module.css";

const industries = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Real Estate",
  "Manufacturing",
  "Travel",
  "Logistics"
];

function Industries() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>Industries We Serve</h2>

        <div className={styles.grid}>

          {industries.map((item) => (

            <div key={item} className={styles.card}>
              {item}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Industries;