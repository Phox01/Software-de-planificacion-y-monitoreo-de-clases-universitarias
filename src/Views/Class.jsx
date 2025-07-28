import React from "react";
import styles from "./CSS/Class.module.css";
import { Link } from "react-router-dom";

export default function Subject() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Link to="/classes" className={styles.profileImg}>
          <h1 className={styles.title}>Nombre de la clase</h1>
        </Link>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
          >
            <path
              d="M4.00696 18.8495V22.8101H7.96751L19.6485 11.1291L15.6879 7.16856L4.00696 18.8495ZM22.7113 8.06629C22.8092 7.96858 22.8869 7.85252 22.9399 7.72476C22.9929 7.59699 23.0202 7.46003 23.0202 7.3217C23.0202 7.18338 22.9929 7.04642 22.9399 6.91865C22.8869 6.79089 22.8092 6.67483 22.7113 6.57712L20.2399 4.10574C20.1422 4.00783 20.0262 3.93015 19.8984 3.87715C19.7706 3.82416 19.6337 3.79688 19.4953 3.79688C19.357 3.79688 19.2201 3.82416 19.0923 3.87715C18.9645 3.93015 18.8485 4.00783 18.7508 4.10574L16.818 6.03849L20.7786 9.99904L22.7113 8.06629Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={styles.description}>
        Descripción de la clase y horario
      </div>
    </div>
  );
}
