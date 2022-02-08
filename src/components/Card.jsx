import React from "react";

export default function Card({ name, min, max, onClose, img }) {
  return (
    <>
      <h1>{name}</h1>
      <label>Volor temperatura minima</label>
      <h3>{min}°</h3>
      <label>Valor temperatura max</label>
      <h3>{max}°</h3>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="logo clima"
      />

      <button onClick={onClose}>X</button>
    </>
  );
}
