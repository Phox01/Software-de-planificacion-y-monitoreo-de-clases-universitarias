import React from 'react'
import styles from './Subject.module.css'

export default function Subject() {
  return (
    <div className={styles.card}>
        <div className={styles.header}>
            <h1 className={styles.title} style={{fontSize: 22, color: "#fff"}}>📚</h1>
            <button className={styles.button}>✏️</button>
        </div>
        <h1 className={styles.title}>Nombre de la Materia</h1>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} />
        </div>
    </div>
  )
}
