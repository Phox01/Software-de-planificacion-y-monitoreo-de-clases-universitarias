import { useForm } from "react-hook-form";
import styles from "./CSS/LogIn.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function LogIn() {
  useEffect(() => {
    document.body.classList.add(styles.authContainer);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <h2>L</h2>
        <h1 className={styles.title}>Inicia Sesion</h1>
        <h2 className={styles.subtitle}>
          Ingresa tu correo y tu contraseña para iniciar
        </h2>
      </div>
      <div className={styles.card}>
        <button className={styles.input}>Continua con Google</button>
        <h2 className={styles.subtitle}>O inicia sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: "El correo es obligatorio",
            })}
            placeholder="Correo electrónico"
            className={styles.input}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <input
            {...register("contraseña", {
              required: "La contraseña es obligatoria",
            })}
            placeholder="Contraseña"
            className={styles.input}
          />
          {errors.contraseña && <p>{errors.contraseña.message}</p>}

          <div className={styles.passwordInfo}>
            <label className={styles.subtitle}>
              <input type="checkbox" className={styles.checkbox} />
              Recordarme
            </label>
            <h2 className={styles.subtitle}>¿Olvidaste la contraseña?</h2>
          </div>
          <button type="submit" className={styles.mainButton}>
            Iniciar Sesion
          </button>
        </form>

        <h3 className={styles.subtitle}>
          ¿No tienes una cuenta?
          <Link to="/signup"> Regístrate</Link>
        </h3>
      </div>
    </div>
  );
}
