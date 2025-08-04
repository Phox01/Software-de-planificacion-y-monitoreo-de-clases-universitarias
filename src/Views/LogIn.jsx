import React from 'react'

export default function LogIn() {
  return (
    <div>
        <div>
            <h1>Logo</h1>
            <h1>Inicia Sesion</h1>
            <h2>Ingresa con tu correo y tu contrasena para iniciar</h2>
        </div>
        <div>
            <button>Continua con Google</button>
            <h2>O inicia sesion</h2>
            <input type="email" placeholder="Correo electronico" />
            <input type="password" placeholder="Contrasena" />
            <div>
                <checkbox />
                <label>Recordarme</label>
                <h2>Olvidaste la contrasena?</h2>
            </div>
            <button>Registrarse</button>
        </div>
    </div>
  )
}
