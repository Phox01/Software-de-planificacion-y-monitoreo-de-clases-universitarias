import React from 'react'
import Subject from './Subject'
import styles from './CSS/Home.module.css'

export default function Home() {
  return (
    <div>
        <h1>Barra de Busqueda</h1>
        <div>
            <h1 className={styles.title}>Materias</h1>
            <div>
                <h1 className={styles.newSubject}>+ Crear</h1>
                <Subject />
                <Subject />
                <Subject />
                <Subject />
                <Subject />
            </div>
        </div>
    </div>
  )
}
