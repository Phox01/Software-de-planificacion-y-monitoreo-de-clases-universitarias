import React from 'react'
import styles from './CSS/LogIn.module.css'
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
        <div>
            <h2>L</h2>
            <h1 className={styles.title}>Inicia Sesion</h1>
            <h2 className={styles.subtitle}>Ingresa tu correo y tu contraseña para iniciar</h2>
        </div>
        <div className={styles.card}>
            <button className={styles.input}>Continua con Google</button>
            <h2 className={styles.subtitle}>O inicia sesión</h2>
            <input type="email" placeholder="Correo electrónico" className={styles.input}/>
            <input type="password" placeholder="Contraseña" className={styles.input}/>
            <div className={styles.passwordInfo}>
                <label className={styles.subtitle}>
                    <input type="checkbox" className={styles.checkbox}/>
                    Recordarme
                </label>
                <h2 className={styles.subtitle}>¿Olvidaste la contraseña?</h2>
            </div>
            <button className={styles.mainButton}>Iniciar Sesion</button>
            <h3 className={styles.subtitle}>
              ¿No tienes una cuenta? 
              <Link to="/signup"> Regístrate</Link>
            </h3>
        </div>
    </div>
  )
}
