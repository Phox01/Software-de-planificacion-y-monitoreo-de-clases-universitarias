import styles from "./CSS/LogIn.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
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
        <h1 className={styles.title}>Regístrate</h1>
        <h2 className={styles.subtitle}>
          Regístrate con tu correo y una contraseña
        </h2>
      </div>
      <div className={styles.card}>
        <button className={styles.input}>Regístrate con Google</button>
        <h2 className={styles.subtitle}>O inicia sesión</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("carnet", {
              required: "El n° de carnet es obligatorio",
            })}
            placeholder="Número de carnet"
            className={styles.input}
          />
          {errors.carnet && <p>{errors.carnet.message}</p>}
          <input
            {...register("nombre", {
              required: "El nomrbe es obligatorio",
            })}
            placeholder="Nombre"
            className={styles.input}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
          <input
            {...register("apellido", {
              required: "El apellido es obligatorio",
            })}
            placeholder="Apellido"
            className={styles.input}
          />
          {errors.apellido && <p>{errors.apellido.message}</p>}
          <input
            {...register("email", {
              required: "El email es obligatorio",
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
          <button type="submit" className={styles.mainButton}>
            Regístrarse
          </button>
        </form>

        <h3 className={styles.subtitle}>
          ¿Tienes una cuenta?
          <Link to="/login"> Inicia Sesión</Link>
        </h3>
      </div>
    </div>
  );
}
