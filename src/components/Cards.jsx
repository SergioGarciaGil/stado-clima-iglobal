import React from "react";
import Card from "./Card.jsx";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      <h1>Cards Components</h1>
      {/* {cities.map((city) => {
        return (
          <Card
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        );
      })} */}
    </>
  );
}
