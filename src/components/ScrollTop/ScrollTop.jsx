import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import styles from "./ScrollTop.module.css";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <button className={styles.scrollTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <FiChevronUp />
    </button>
  ) : null;
}

export default ScrollTop;
