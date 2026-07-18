import { Link } from "react-router-dom";
import styles from "./ServiceDetails.module.css";

function CTA() {
  return (
    <section className={styles.cta}>

      <div className={styles.container}>

        <h2>Ready to Build Your Project?</h2>

        <p>
          Let's create secure, scalable and future-ready digital solutions for your business.
        </p>

        <Link to="/contact" className={styles.button}>
          Contact Us
        </Link>

      </div>

    </section>
  );
}

export default CTA;