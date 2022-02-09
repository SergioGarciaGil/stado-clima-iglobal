import React from "react";
import estilos from "./Card.module.css";

export default function Card({ name, min, max, onClose, img }) {
  return (
    <>
      <div className={estilos.contenedor}>
        <button onClick={onClose} className={estilos.btn}>
          X
        </button>

        <h1>{name}</h1>

        <div className={estilos.infoCont}>
          <div>
            <label>Min</label>
            <h3>{min}°</h3>
          </div>
          <div>
            <label>Max</label>
            <h3>{max}°</h3>
          </div>

          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="logo clima"
          />
        </div>
      </div>
    </>
  );
}
