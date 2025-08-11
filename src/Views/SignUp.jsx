import styles from "./CSS/LogIn.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { insertData } from "../Model/supabase";

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
    insertData("professor", data)
      .then((response) => {
        console.log("User created successfully:", response);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
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
            {...register("no_carnet", {
              required: "El n° de carnet es obligatorio",
            })}
            placeholder="Número de carnet"
            className={styles.input}
          />
          {errors.no_carnet && <p>{errors.no_carnet.message}</p>}
          <input
            {...register("name", {
              required: "El nomrbe es obligatorio",
            })}
            placeholder="Nombre"
            className={styles.input}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            {...register("lastname", {
              required: "El apellido es obligatorio",
            })}
            placeholder="Apellido"
            className={styles.input}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
          <input
            {...register("email", {
              required: "El email es obligatorio",
            })}
            placeholder="Correo electrónico"
            className={styles.input}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            placeholder="Contraseña"
            className={styles.input}
          />
          {errors.password && <p>{errors.password.message}</p>}
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
