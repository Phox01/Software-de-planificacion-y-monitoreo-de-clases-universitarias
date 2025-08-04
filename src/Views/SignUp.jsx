import React from 'react'
import styles from './CSS/SignUp.module.css'

export default function SignUp() {
  return (
    <div>
        <div>
            <h1>L</h1>
            <h1 className={styles.title}>Registrate</h1>
            <h2 className={styles.subtitle}>Registrate con tu correo y una contrasena</h2>
        </div>
        <div className={styles.card}>
            <button className={styles.input}>Continua con Google</button>
            <h2 className={styles.subtitle}>O inicia sesion</h2>
            <input type="email" placeholder="Correo electronico" className={styles.input}/>
            <input type="password" placeholder="Contrasena" className={styles.input}/>
            <button className={styles.mainButton}>Registrarse</button>
            <h3>Tienes una cuenta? Inicia Sesion</h3>
        </div>
    </div>
  )
}
