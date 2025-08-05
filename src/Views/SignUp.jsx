import React from 'react'
import styles from './CSS/SignUp.module.css'
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
        <div>
            <h2>L</h2>
            <h1 className={styles.title}>Regístrate</h1>
            <h2 className={styles.subtitle}>Regístrate con tu correo y una contraseña</h2>
        </div>
        <div className={styles.card}>
            <button className={styles.input}>Regístrate con Google</button>
            <h2 className={styles.subtitle}>O inicia sesión</h2>
            <input type="email" placeholder="Número de carnet" className={styles.input}/>
            <input type="email" placeholder="Nombre" className={styles.input}/>
            <input type="email" placeholder="Apellido" className={styles.input}/>
            <input type="email" placeholder="Correo electrónico" className={styles.input}/>
            <input type="password" placeholder="Contraseña" className={styles.input}/>
            <button className={styles.mainButton}>Regístrarse</button>
            <h3 className={styles.subtitle}>
              ¿Tienes una cuenta? 
              <Link to="/login"> Inicia Sesión</Link>
            </h3>
        </div>
    </div>
  )
}
