"use client";
import Image from "next/image";
import styles from "./page.module.css";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <motion.div
      className={styles.current_video}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}
    />
  );
}
