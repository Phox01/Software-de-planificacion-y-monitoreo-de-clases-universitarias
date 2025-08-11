import React, { Component } from "react";
import { useForm } from "react-hook-form";
import styles from "./CSS/CreateSubject.module.css";
import { useEffect, useState } from "react";
import { retrieveOnlyOneField } from "../Model/supabase";
import { generateTimeSlots } from "../Controller/hours";
import { insertData } from "../Model/supabase";

export default function CreateSubject() {
  useEffect(() => {
    document.body.classList.add(styles.background);
  });
  const [subjects, setSubjects] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await retrieveOnlyOneField("subject", "name");
        setSubjects(data.map((subject) => subject));
        console.log("Retrieved names successfully!");
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchSubjects();
  }, []);

  const timeSlots = generateTimeSlots("7:00", "17:30", 30);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const classroom = watch("location");

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    const newSelectedDays = selectedDays.includes(day) //esto es para ver si se seleccionó un día o no
      ? selectedDays.filter((d) => d !== day) //includes day==true: elimina el día seleccionado porque ya se agregó
      : [...selectedDays, day]; //includes day==false: toma el array selectedDays y lo copia para el newSelectedDays y añade day
    setSelectedDays(newSelectedDays);
    setValue("days", newSelectedDays);
  };

  const onSubmit = (data) => {
    if (data.startTime >= data.endTime) {
      alert("La hora de fin debe ser después de la hora de inicio");
      return;
    }

    const schedule = data.days.join(", ");
    const classroom = data.location ? `${data.location}-${data.classroom}` : "";

    const newData = {
      ...data,
      schedule,
      classroom,
    };

    delete newData.days;
    delete newData.location;

    console.log(newData);
    insertData("section", newData)
      .then((response) => {
        console.log("User created successfully:", response);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  useEffect(() => {
    register("days", { required: "Debes seleccionar al menos un día" });
  }, [register]);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}> Crea una materia </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
        <div className={styles.containerElement}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label className={styles.element}>
              <p>Nombre de la materia:</p>
              <div className={styles.customSelectWrapper}>
                <select
                  {...register("name", {
                    required: "El nombre de la materia es obligatorio",
                  })}
                  placeholder="Nombre de la materia"
                  className={styles.customSelect}
                >
                  <option value="" disabled>
                    Selecciona una materia
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject.name} value={subject.name}>
                      {subject.name}
                    </option>
                  ))}
                </select>
                <div className={styles.arrow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24px"
                    height="24px"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </label>
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
        <div className={styles.element}>
          <p>¿Qué días das clases para esta materia?</p>
          <div className={styles.containerElement}>
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <button
                key={day}
                type="button"
                className={`${styles.days} ${
                  selectedDays.includes(day) ? styles.selected : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </button>
            ))}
          </div>
          {errors.days && <p>{errors.days.message}</p>}
        </div>
        <div className={styles.containerElement}>
          <label className={styles.element}>
            <p>Hora de inicio:</p>
            <div className={styles.customSelectWrapper}>
              <select
                {...register("startTime", { required: true })}
                className={styles.customSelect}
              >
                <option value="">Selecciona una hora</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <div className={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </div>
            </div>
          </label>
          <label className={styles.element}>
            <p>Hora de fin:</p>
            <div className={styles.customSelectWrapper}>
              <select
                {...register("endTime", { required: true })}
                className={styles.customSelect}
              >
                <option value="">Selecciona una hora</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <div className={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </div>
            </div>
          </label>
        </div>
        <label className={styles.element}>
          <p>¿En dónde das clases?</p>
          <div className={styles.locationWrapper}>
            <div className={styles.customSelectWrapper}>
              <select
                {...register("location")}
                className={styles.customSelect}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Edificio</option>
                {["A1", "A2", "EU", "LAB", "VIRT"].map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <div className={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </div>
            </div>
            <input
              type="number"
              maxLength="3"
              {...register("classroom")}
              className={styles.classroomInput}
              disabled={location === "VIRT"}
            />
          </div>
        </label>

        <button type="submit" className={styles.mainButton}>
          Regístrarse
        </button>
      </form>
    </div>
  );
}
