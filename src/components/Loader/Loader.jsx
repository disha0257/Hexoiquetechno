import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Loader.module.css";

function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loaderScreen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <motion.div
            className={styles.loaderCard}
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className={styles.brandMark}>H</div>
            <div className={styles.brandCopy}>
              <h1>Hexonique</h1>
              <p>Enterprise IT & Digital Transformation</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
