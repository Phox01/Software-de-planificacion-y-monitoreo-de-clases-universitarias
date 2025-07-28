import React from "react";
import Subject from "./Subject";
import styles from "./CSS/Home.module.css";
import Header from "./Components/Header";
import BottomNavigation from "./Components/BottomNav";

export default function Home() {
  return (
    <div className={styles.layout}>
      <BottomNavigation />
      <div className={styles.mainContent}>
        <Header />
        <h1 className={styles.title}>Materias</h1>
        <div className={styles.subjectsContainer}>
          <div className={styles.newSubject}>+ Añadir</div>
          <Subject />
          <Subject />
          <Subject />
          <Subject />
          <Subject />
          <Subject />
        </div>
        <div className={styles.optionContainer}>
          <h1 className={styles.title}>Importar nueva materia</h1>
          <h2 className={styles.text}>
            Añade un cronograma en PDF para generar una clase{" "}
          </h2>
          <div className={styles.loadSubject}>+ Añadir</div>
        </div>
      </div>
    </div>
  );
}
