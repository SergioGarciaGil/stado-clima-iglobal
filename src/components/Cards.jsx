import React from "react";
import Card from "./Card.jsx";
import estilos from "./Cards.module.css";

export default function Cards(props) {
  return (
    <>
      <div className={estilos.contenedor}>
        {props.cities.map((city) => (
          <Card
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        ))}
      </div>
    </>
  );
}
