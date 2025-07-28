import React from "react";
import Header from "./Components/Header";
import BottomNavigation from "./Components/BottomNav";
import styles from "./CSS/Classes.module.css";
import Class from "./Class";

export default function Classes() {
  return (
    <div className={styles.layout}>
      <div className={styles.mainContent}>Classes</div>
      <Header />
      <div className={styles.subjectsContainer}>
        <Class />
        <Class />

        <Class />
      </div>
      <BottomNavigation />
    </div>
  );
}
