import { useEffect, useState } from "react";
import styles from "./ScrollProgress.module.css";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ScrollProgress;
